import { View, Text, StyleSheet } from 'react-native'
import {Image} from 'expo-image'
import React from 'react'
import { Button } from 'react-native-paper'
import { globalStyles } from '@/global-styles'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import Icon from 'react-native-vector-icons/AntDesign'
import { useNavigation } from '@react-navigation/native'


export default function Welcome() {
  const navigation = useNavigation()

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1}}>
      <View style={styles.screen}>

          <Button 
          icon={() => <Icon name='questioncircle' color='white' size={25}/>}
          style={{...globalStyles.smallButton, alignSelf: 'flex-end'}} textColor='white'>
            <Text>Help</Text>
          </Button>


          <View>
            <Image
                source={require('../../assets/images/shop-cart.webp')}
                style={styles.cart}
                contentFit='contain'
            />
            <Text style={styles.cartText}>Cart Genie</Text>
            <Button 
            onPress={() => {
              console.log('Helllo world')
              navigation.navigate("scanner/QRCodeScanner");
            }}
            style={globalStyles.button} textColor='white'>PAIR UP CART</Button>
          </View>

          <Text style={styles.bottomText}>Your ultimate shopping assistant</Text>


          </View>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}


const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'space-between'
    },

    testingRed: {
      color: 'red'
    },

    cart: {
        width: '100%',
        aspectRatio: 1
    },

    cartText: {
      fontFamily: 'Laila-Bold',
      fontSize: 60,
      fontWeight: 'bold',
      color: '#042732',
      textAlign: 'center'
    },

    bottomText: {
      fontFamily: 'Laila-Bold',
      fontSize: 18,
      margin: 10,
      fontWeight: 'bold',
      color: '#042732',
      textAlign: 'center'
    }

   
})