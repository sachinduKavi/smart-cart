
import React from 'react'
import { View, StyleSheet} from 'react-native'
import {Appbar} from 'react-native-paper'

export default function CustomAppBar(props: any) {
  return (
    <Appbar.Header style={{backgroundColor: '#FA5B2C'}}>
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