import React from 'react'
import { Image, StyleSheet, Text, View } from 'react-native'

export default function Home() {
  return (
    <View style={styles.header}>
        <View>
          <Text style={styles.text}> Your name </Text>
          <Text style={styles.text}> Good Morning! </Text>

        </View>
        <Image 
        style={styles.image}
        source={{uri: "https://picsum.photos/300/300"}}/>
    </View>
  )
}


const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 10,
        marginVertical: 20
    },
    
    image: {
        width: 70,
        height: 70,
        borderRadius: 35
    },
    text: {
        fontFamily: 'Inter_900Black',
    }
});