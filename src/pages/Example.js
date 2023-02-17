import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
export default function Example() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Click Here</Text>
      </TouchableOpacity>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    button: {
      width: 100,
      height: 50,
      backgroundColor: "#0099bb",
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
    },
    buttonText: {
      color: "#ffffff"
    }
  });