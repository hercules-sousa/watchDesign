import React from 'react'
import { Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../../components/header'
import watches from '../../database'
import styles from './styles'

const SampleScreen = ({ navigation }) => {

  let arrWatches = []

  function createArray(){
    Object.keys(watches).forEach((model) => {
      let arr = []
      arr.push(model)
      arr.push(watches[model])
      arrWatches.push(arr)
    })
  }

  /*
  function concatWatchName(separatedName){
    let concated = String()
    separatedName.split(' ').map(word => {
      concated += word
    })
    console.log(concated)
    return concated
  }
  */
  

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.body}>
        {createArray()}
        {arrWatches.map((watchArray) => {
          let model = watchArray[0]
          let data = watchArray[1]
          return (

            <TouchableOpacity key={model} onPress={() => navigation.navigate('BuyingScreen', {
              'model': model,
              'uri': data.uri,
              'composition': data.composition,
              'price': data.price,
            })}>
              <View style={styles.box}>
                <Image source={{ uri: data.uri }} style={styles.watchImage}/>
                <Text style={styles.watchName}>{model.toUpperCase()}</Text>
                <Text style={styles.watchType}>Classic</Text>
                <Text style={styles.watchPrice}>{data.price}</Text>
              </View>
            </TouchableOpacity>
            
          )
        })}
        
      </ScrollView>
    </View>
  );
}

export default SampleScreen