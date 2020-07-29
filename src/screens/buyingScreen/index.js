import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native'
import Header from '../../components/header'
import { Feather, AntDesign } from '@expo/vector-icons';

const BuyingScreen = ({ route, navigation }) => {
  let { model, uri, price, composition } = route.params
  return (
    <View style={styles.container}>
      <Header />

      <View style={{ flex: 1, alignItems: 'center' }}>
        <Image source={{ uri: uri }} style={styles.imageConfig} />

        <Text style={styles.textModel}>{model[0].toUpperCase() + model.slice(1)}</Text>

        <Text style={styles.textPrice}>{price}</Text>

        <Text style={styles.textBold}>Compostion:</Text>
        <Text>{composition}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={{ backgroundColor: '#aa7e6f', padding: 16, borderRadius: 36 }}>
          <AntDesign name="arrowleft" 
            size={24} 
            color="white" 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addCartButton}>
          <Text style={styles.textAddCartButton}>Add to cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{ backgroundColor: '#aa7e6f', padding: 16, borderRadius: 36 }}>
          <Feather 
            name="save" 
            size={24} 
            color="white" 
          />
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
    borderRadius: 32,
    padding: 32,
  },

  textAddCartButton: {
    color: '#fffaf7',
    fontSize: 16
  },
  
  buttonContainer: {
    position: 'absolute',
    bottom: 24,
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageConfig: {
    width: '50%',
    height: '50%',
  },

  textModel: {
    fontWeight: 'bold',
    fontSize: 36,
    fontStyle: 'normal',
    fontFamily: 'Roboto'
  },
  
  textBold: {
    fontWeight: 'bold',
    fontSize: 16
  },

  textPrice: {
    color: '#806261',
    padding: 16,
    fontSize: 24,
    fontFamily: 'sans-serif'
  }
})

export default BuyingScreen