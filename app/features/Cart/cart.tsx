import React, {useEffect, useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomAppBar from '@/app/components/CustomAppBar'
import { ScrollView } from 'react-native'
import CartItem from './CartItem'
import { Button } from 'react-native-paper'
import { useRouter, useLocalSearchParams } from 'expo-router'
import SocketConnection from '@/app/services/socketConnection'


export default function cart() {
    const {cartID} = useLocalSearchParams() 
    const router = useRouter()

    let socket: SocketConnection

    useEffect(() => {
        socket = new SocketConnection(cartID.toString())

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
            Array.from({length: 50}, (_, i) => i++).map(element => <CartItem key={element}/>)
        }
        </ScrollView>
        </View>

        <View style={styles.bottomBar}>
            <Text style={styles.total}>LKR 25400.00</Text>
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


