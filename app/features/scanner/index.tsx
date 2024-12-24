import { View, Text } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import CustomAppBar from '@/app/components/CustomAppBar'
import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';

export default function QRCodeScanner() {
  const [permission, requestPermission] = useCameraPermissions()

  if(!permission?.granted) {
    requestPermission()
    return <View/>
  }else
  return (
    
        <View>
          <CustomAppBar title="Scan the cart" backNavigation={true}/>
          <Text>QRCodeScanner</Text>
          <CameraView style={{flex: 1}} facing='back'>
            
          </CameraView>
        </View>
      
  )
}