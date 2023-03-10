import React from 'react'
import { Image, View, Text, StyleSheet } from 'react-native'

export default function CardProduto(props) {
  return (
    <View style={styles.container}>
        <Image  style={styles.image} source={{uri: props.produto.thumbnail}}/>
        <Text>{props.produto.title}</Text>
        <Text>{props.produto.price}</Text>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        width: 142,
        height: 184,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
    },
    image: {
        borderRadius:16,
        width: 150,
        height: 150
    }
});


