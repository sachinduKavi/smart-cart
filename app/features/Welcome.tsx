import { View, Text, StyleSheet } from 'react-native'
import {Image} from 'expo-image'
import React from 'react'

export default function Welcome() {
  return (
    <View style={styles.screen}>
        <Text>Hello World</Text>
      <View>
        <Image
            source={require('../../assets/images/shop-cart.webp')}
            style={styles.cart}
            contentFit='contain'
        />
        <Text className='text-white'>Cart Genie</Text>
      </View>

      <Text>Hello World</Text>
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

    cart: {
        width: '100%',
        aspectRatio: 1
    },

   
})