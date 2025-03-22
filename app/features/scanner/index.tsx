import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import CustomAppBar from '@/app/components/CustomAppBar'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button, TextInput } from 'react-native-paper';
import { globalStyles } from '@/global-styles';
import { useRouter } from 'expo-router';
import { cartInitializeQuery } from '@/app/services/cartQuery';
import { validateCode } from '@/app/middleware/formatter';
import { timeDelay } from '@/app/middleware/middleware';


export default function QRCodeScanner() {
  const [permission, requestPermission] = useCameraPermissions()
  const [code, changeCode] = useState('')
  const router = useRouter()
  let onProceed: boolean = true

  // QR code detected 
  // This is a critical function
  const codeDetected = async (code: string) => {
    onProceed = false
    console.log(code) // console out the cart code

    if(validateCode(code)) {
      console.log('response sent')
      const response = await cartInitializeQuery(code)

      if(response.status === 201 && response.data.proceed) {
        // Code validated
        router.push({
          pathname: '/features/Cart/cart',
          params: {cartID: code}
        })
        return;
      }
    }
    
    
    console.log('End waiting')
    onProceed = true
  }

  if(!permission?.granted) {
    requestPermission()
    return <View><Text>Permission request</Text></View>
  }else
  return (
    
    <View style={{justifyContent: 'center', flex: 1,}}>
      <CustomAppBar title="Scan the cart" backNavigation={true}/>
      
      <View style={{flex: 1, width: '100%', justifyContent: 'center', padding: 10}}>
      <CameraView style={{width: '100%', aspectRatio: 1}} facing='back'
      onBarcodeScanned={(data: any) => {
        // QR or Barcode is detected 
        if(onProceed) codeDetected(data.data);
      }}
      > </CameraView>


      <View style={{padding: 20, justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
        <TextInput placeholder='Enter the cart code' onChangeText={changeCode} value={code}/>
        <Button onPress={() => {
          codeDetected(code)
        }} style={{...globalStyles.button, margin: 20}} textColor='white'><Text>PROCEED</Text></Button>
      </View>

      <Button onPress={() => {
        router.back()
      }} style={{...globalStyles.button, margin: 20}} textColor='white'><Text>CANCEL</Text></Button>
      </View>

    </View>
      
  )
}