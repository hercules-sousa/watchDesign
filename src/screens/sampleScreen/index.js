import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity, SafeAreaView } from 'react-native';
import Header from '../../components/header'
import watches from '../../database'

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff9',
  },

  box: {
    width: 136,
    height: 174,
    backgroundColor: '#f5f5f5',
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 24,
  },


  body: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },

  watchImage: {
    position: 'absolute',
    top: -40,
    width: 128,
    height: 128,
  },

  watchName: {
    fontSize: 16
  },

  watchType: {
    fontSize: 14,
    color: '#d1d1d1'
  },

  watchPrice: {
    color: '#806261',
    marginBottom: 24,
  },
});


export default SampleScreen