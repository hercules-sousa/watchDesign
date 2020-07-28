import React from 'react'
import { StyleSheet, Text, View, ScrollView, Image, TouchableOpacity } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';
import watches from '../../database'

const BuyingScreen = () => {

  let arrWatches = []

  function createArray(){
    Object.keys(watches).forEach((model) => {
      let arr = []
      arr.push(model)
      arr.push(watches[model])
      arrWatches.push(arr)
    })
  }

  function concatWatchName(separatedName){
    let concated = String()
    let arrSeparatedName = separatedName.split(' ').map(word => {
      concated += word
    })
    return concated
  }
  

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons style={styles.icons} name="filter-list" size={32} color="black"/>
        <Ionicons style={styles.icons} name="ios-infinite" size={32} color="black" />
        <AntDesign style={styles.icons} name="search1" size={32} color="black" />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        {createArray()}
        {arrWatches.map((watchArray) => {
          let model = watchArray[0]
          let data = watchArray[1]
          return (

            <TouchableOpacity key={model}>
              <View style={styles.box}>
                <Image source={require('../../../watches/datejust36.png')} style={styles.watchImage}/>
                <Text style={styles.watchName}>{concatWatchName(model).toUpperCase()}</Text>
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
    backgroundColor: '#fffff9'
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

  header: {
    paddingTop: 40,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
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

  icons: {
    bottom: 8
  }
});


export default BuyingScreen