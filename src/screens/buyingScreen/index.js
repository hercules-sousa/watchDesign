import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import { AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';

const BuyingScreen = ({ route, navigation }) => {
  let { model, uri, price, composition } = route.params
  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <MaterialIcons style={styles.icons} name="filter-list" size={32} color="black"/>
        <Ionicons style={styles.icons} name="ios-infinite" size={32} color="black" />
        <AntDesign style={styles.icons} name="search1" size={32} color="black" />
      </View>

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={{ uri: uri }} style={styles.imageConfig} />
        <Text>Model: {model[0].toUpperCase() + model.slice(1)}</Text>
        <Text>Price: {price}</Text>
        <Text>Compostion:</Text>
        <Text>{composition}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addCartButton}>
          <Text style={styles.textAddCartButton}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff9',
  },
  addCartButton: {
    backgroundColor: '#aa7e6f',
    width: 160,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 16,
    padding: 24,
  },

  textAddCartButton: {
    color: '#fffaf7'
  },
  
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    width: '100%',
    alignItems: 'center'
  },
  imageConfig: {
    width: '50%',
    height: '50%',
  },

  header: {
    paddingTop: 40,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
})

export default BuyingScreen