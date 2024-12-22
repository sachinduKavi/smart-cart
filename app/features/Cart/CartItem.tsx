import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import { Image } from 'react-native'
import { Pressable } from 'react-native'

export default function CartItem() {
  return (
    <Pressable onPress={() => {}}>
        <View style={styles.container}>
      
            <Image source={{uri: 'https://huckberry.imgix.net/spree/products/750779/original/50969_Flint_and_Tinder_10-Year_Pullover_Hoodie_Black_01.jpg?auto=format%2C%20compress&crop=top&fit=fill&cs=tinysrgb&ar=1%3A1&ixlib=react-9.8.1&w=799'}}
                style={styles.image}
                resizeMode='cover'
            />

            <View style={styles.description}>
                <Text style={{color: '#B7BAC4', fontSize: 14, marginVertical: 5}} ellipsizeMode='tail' numberOfLines={2}>Apple Watch Ultra 2 Apple Watch Ultra 2 Apple Watch Ultra 2</Text>
                <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold'}}>LKR 2500.00</Text>
                
                <Text style={{color: '#B7BAC4', fontSize: 20, marginVertical: 5, fontWeight: 'bold', alignSelf: 'flex-end', textAlign: 'right'}}>x1</Text>
            </View>
        </View>
    </Pressable>
  )
}


const styles = StyleSheet.create({
    container: {
        padding: 10,
        height: 150,
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
        height: '100%',
        marginRight: 10,
        aspectRatio: 1,
        backgroundPosition: 'center',
        backgroundColor: 'red',
    }

})