import React, {useState} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import CustomAppBar from '../componets/CustomAppBar'
import { ScrollView } from 'react-native'
import CartItem from './Cart/CartItem'
import { Button } from 'react-native-paper'



export default function cart() {
 


  return (
    <View style={{backgroundColor: 'white', display: 'flex', height: '100%'}}>
        
        <CustomAppBar title="Smart Shopping Cart"/>


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


