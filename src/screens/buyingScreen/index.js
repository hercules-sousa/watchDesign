import React from 'react'
import { View, Text, TouchableOpacity, Image } from 'react-native'
import Header from '../../components/header'
import { Feather, AntDesign } from '@expo/vector-icons';

import styles from './styles'

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
        <TouchableOpacity style={styles.icons} onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" 
            size={24} 
            color="white" 
          />
        </TouchableOpacity>

        <TouchableOpacity style={styles.addCartButton}>
          <Text style={styles.textAddCartButton}>Add to cart</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icons}>
          <Feather 
            name="save" 
            size={24} 
            color="white" 
          />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: 'center', padding: 16 }}>
        <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center',  width: '90%', height: 56 }}>
          <Text style={{ color: '#a9a9a9', fontSize: 16 }}>About</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default BuyingScreen