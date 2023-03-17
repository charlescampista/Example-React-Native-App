import React, { useEffect, useState } from 'react'
import { Image, StyleSheet, Text, View, FlatList } from 'react-native'
import CardProduto from '../components/CardProduto';
import Tag from '../components/Tag';
import * as productServices from './../services/ProdutoServices';
import * as tagServices from './../services/TagServices';

export default function Home() {

  const [tags, setTags] = useState([]);
  const [products, setProducts] = useState([]);


  useEffect(() => {
    tagServices.getAllTags().then((response) => {
      setTags(response.data);
    });

    productServices.getAllProducts().then((response) => {
      setProducts(response.data.products);
    });

  }, []);


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View>
          <Text style={styles.text}> Hi {"<Your Name>"}!! </Text>
          <Text style={styles.text}> Good Morning! </Text>
        </View>
        <Image
          style={styles.image}
          source={{ uri: "https://picsum.photos/300/300" }} />

      </View>

      <View style={styles.tagContainer}>
        <FlatList
          data={tags}
          horizontal={true}
          renderItem={({ item }) =>
            <Tag title={item} />
          }
        />

      </View>

      <FlatList
        data={products}
        renderItem={({ item }) => <CardProduto produto={item} />}
        numColumns={2}
        horizontal={false}
      />

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