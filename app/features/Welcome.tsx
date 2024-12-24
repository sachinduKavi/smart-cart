import { View, Text, StyleSheet } from 'react-native'
import {Image} from 'expo-image'
import React from 'react'

export default function Welcome() {
  return (
    <View style={styles.screen} className='bg-blue-400s'>
        <Text>Hello World</Text>
      <View>
        <Image
            source={require('../../assets/images/shop-cart.webp')}
            style={styles.cart}
            contentFit='contain'
        />
        <Text className='text-red font-bold bg-red-500'>Cart Genie</Text>
      </View>

      <Text style={styles.testingRed}>Hello World</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    screen: {
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },

    testingRed: {
      color: 'red'
    },

    cart: {
        width: '100%',
        aspectRatio: 1
    },

   
})