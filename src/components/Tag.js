import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

export default function Tag(props) {
  return (
    <View style={styles.container}>
        <Text style={styles.title}  >{props.title}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: 150,
        height: 32,
        borderRadius: 12,
        backgroundColor: "#000000",
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10
    },
    title: {
        color: "#ffffff"
    }

});