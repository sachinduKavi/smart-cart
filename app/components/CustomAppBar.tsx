
import React from 'react'
import { View, StyleSheet} from 'react-native'
import {Appbar} from 'react-native-paper'

export default function CustomAppBar(props: any) {
  return (
    <Appbar.Header style={{backgroundColor: '#005F7E'}}>
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