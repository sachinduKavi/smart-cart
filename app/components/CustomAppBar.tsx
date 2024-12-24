
import React from 'react'
import { View, StyleSheet} from 'react-native'
import {Appbar} from 'react-native-paper'
import { useRouter } from 'expo-router'

export default function CustomAppBar(props: any) {
  const router = useRouter()
  return (
    <Appbar.Header style={{backgroundColor: '#005F7E'}}>
       
        {props.backNavigation && <Appbar.BackAction iconColor='white' onPress={()=> router.back()}/> }
        <Appbar.Content title={props.title} titleStyle={styles.title}/>
    </Appbar.Header>
  )


}

const styles = StyleSheet.create({
    title: {
        fontWeight: 'bold',
        color: 'white'
    }
})