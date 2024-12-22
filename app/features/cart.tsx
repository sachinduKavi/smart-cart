import React from 'react'
import { View } from 'react-native'
import { Text } from 'react-native'
import { Link } from 'expo-router'

export default function cart() {
  return (
    <View>
        <Text>Hello World</Text>
        <Link href="/">Go Back to Home</Link>
    </View>
  )
}
