import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { Pressable } from 'react-native'
import { CartItemInterface } from '@/app/models/products'

export default function CartItem(prams:any) {
    const item:CartItemInterface  = prams.item
  return (
    <Pressable onPress={() => {}}>
        <View style={styles.container}>
      
            <Image source={{uri: item.image}}
                style={styles.image}
                resizeMode='cover'
            />

            <View style={styles.description}>
                <Text style={{color: '#B7BAC4', fontSize: 20, marginVertical: 5,fontWeight: 'bold'}} ellipsizeMode='tail' numberOfLines={2}>{item.name}</Text>
                <Text style={{color: '#B7BAC4', fontSize: 14, marginVertical: 5}} ellipsizeMode='tail' numberOfLines={2}>{item.description}</Text>
                <Text style={{color: '#0291AC', fontSize: 20, fontWeight: 'bold'}}>LKR {item.unit_price}</Text>
                
                <Text style={{color: '#B7BAC4', fontSize: 20, marginVertical: 5, fontWeight: 'bold', alignSelf: 'flex-end', textAlign: 'right'}}>x{item.quantity}</Text>
            </View>
        </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: 'white',
        marginHorizontal: 25,
        marginVertical: 10,
        borderRadius: 5,
        borderStyle: 'solid',
        borderWidth: 1,
        borderColor: '#E3E4E8',


        display: 'flex',
        flexDirection: 'row',
        elevation: 0.5,
    
    },

    description: {
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center'
    },

    image: {
        height: 150,
        marginRight: 10,
        aspectRatio: 1,
        backgroundPosition: 'center',
        backgroundColor: 'red',
    }

})