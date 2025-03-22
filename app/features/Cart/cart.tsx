import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomAppBar from '@/app/components/CustomAppBar'
import { ScrollView } from 'react-native'
import CartItem from './CartItem'
import { Button } from 'react-native-paper'
import { BillInterface } from '@/app/models/products'
import { useRouter, useLocalSearchParams } from 'expo-router'
import SocketConnection from '@/app/services/socketConnection'


export default function cart() {
    const {cartID} = useLocalSearchParams() 
    const router = useRouter()
    const [customerBill, setCustomerBill] = useState<BillInterface>({
        item_list: [],
        total: 0
    })

    let socket: SocketConnection

    useEffect(() => {
        socket = new SocketConnection(cartID.toString())

        // On receiving message
        socket.socket.on(cartID.toString(), (message: string) => {
            console.log('Server response:', message)
            setCustomerBill(JSON.parse(message).bill)
        })


        return () => {
            // Connection disabling
            console.log('Connection disconnect')
            socket.socketDisconnect()
        }
    }, [])

    

  return (

    <View style={{backgroundColor: 'white', display: 'flex', height: '100%'}}>
        
        <CustomAppBar title={`Smart Shopping Cart ${cartID}`}/>


        <View style={{flex: 1}}>
        <ScrollView>

        {
            customerBill.item_list.map((item, index) => {
                return <CartItem key={index} item={item}/>
            })
        }
        </ScrollView>
        </View>

        <View style={styles.bottomBar}>
            <Text style={styles.total}>LKR {customerBill.total}</Text>
            <Button 
            onPress={() => {
                // router.navigate('/features/Welcome')
                socket.emitMessage('Hello World')
            }}
            labelStyle={{fontWeight: 'bold'}}
            mode='outlined' textColor='white' style={styles.button}>CHECKOUT</Button>
        </View>
      
    </View>

  )
}


const styles = StyleSheet.create({
    bottomBar: { borderRadius: 5, padding: 5, elevation: 1, borderStyle: 'solid', backgroundColor: '#005F7E',
        flexDirection: 'column'
    },
    button: {
        backgroundColor: 'black',
        borderWidth: 1,
        elevation: 5,
        borderColor: 'black',
        // flex: 1,
        fontWeight: 'bold',
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
    },

    total: {
        // flex: 1,
        color: 'white',
        fontSize: 22,
        textAlign: 'right',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        paddingVertical: 5,
    }
})


