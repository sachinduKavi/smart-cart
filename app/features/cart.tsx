import React, {useState} from 'react'
import { Text, View } from 'react-native'
import CustomAppBar from '../componets/CustomAppBar'
import { ScrollView } from 'react-native'
import CartItem from './Cart/CartItem'
import { BottomNavigation } from 'react-native-paper'


export default function cart() {
 


  return (
    <View style={{backgroundColor: 'white'}}>
        
        <CustomAppBar title="Smart Shopping Cart"/>


        <ScrollView>

        {
            Array.from({length: 50}, (_, i) => i++).map(element => <CartItem key={element}/>)
        }
        </ScrollView>

        
      
    </View>
  )
}


