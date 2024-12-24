import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import CustomAppBar from '@/app/components/CustomAppBar'
import { CameraView, useCameraPermissions } from 'expo-camera';
import { Button } from 'react-native-paper';
import { globalStyles } from '@/global-styles';
import { useRouter } from 'expo-router';

export default function QRCodeScanner() {
  const [permission, requestPermission] = useCameraPermissions()
  const router = useRouter()

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
            console.log(data)
          }}
          > </CameraView>

          <Button onPress={() => {
            router.back()
          }} style={{...globalStyles.button, margin: 20}} textColor='white'>CANCEL</Button>
          </View>

        </View>
      
  )
}