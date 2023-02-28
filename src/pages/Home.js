import React from 'react'
import { Image, StyleSheet, Text, View, FlatList } from 'react-native'

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}> Hi {"<Your Name>"}!! </Text>
          <Text style={styles.text}> Good Morning! </Text>
        </View>
        <Image 
        style={styles.image}
        source={{uri: "https://picsum.photos/300/300"}}/>
       
      </View>

      <View style={styles.tagContainer}>
      <FlatList
          data={[
            "smartphones",
            "laptops",
            "fragrances",
            "skincare",
            "groceries",
            "home-decoration",
            "furniture",
            "tops",
            "womens-dresses",
            "womens-shoes",
            "mens-shirts",
            "mens-shoes",
            "mens-watches",
            "womens-watches",
            "womens-bags",
            "womens-jewellery",
            "sunglasses",
            "automotive",
            "motorcycle",
            "lighting"
            ]}
          renderItem={({item}) => 
          <View style={styles.tag}>
            <Text>{item}</Text>
          </View>}
        />
      </View>
    
    </View>
  )
}


const styles = StyleSheet.create({

  container: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 37
  },
  tag: {
    width: 60,
    height: 32,
    borderRadius: 12
  },

  tagContainer: {
    flexDirection: 'row'
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