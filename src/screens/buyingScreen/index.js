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
    arrSeparatedName = separatedName.split(' ')
    concated = arrSeparatedName[0].concat(arrSeparatedName[1])
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


        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('../../../watches/datejust36.png')} style={styles.watchImage} />
            <Text style={styles.watchName}>DATEJUST 36</Text>
            <Text style={styles.watchType}>Classic</Text>
            <Text style={styles.watchPrice}>R$ 51.850</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('../../../watches/datejust41.png')} style={styles.watchImage} />
            <Text style={styles.watchName}>DATEJUST 41</Text>
            <Text style={styles.watchType}>Classic</Text>
            <Text style={styles.watchPrice}>R$ 80.150</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('../../../watches/datejust31.png')} style={styles.watchImage, { width: 144, height: 144 }} />
            <Text style={styles.watchName}>DATEJUST 31</Text>
            <Text style={styles.watchType}>Classic</Text>
            <Text style={styles.watchPrice}>R$ 72.300</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('../../../watches/datejust34.png')} style={styles.watchImage, { width: 144, height: 144 }} />
            <Text style={styles.watchName}>DATEJUST 34</Text>
            <Text style={styles.watchType}>Classic</Text>
            <Text style={styles.watchPrice}>R$ 57.850</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('../../../watches/dayDate40.png')} style={styles.watchImage} />
            <Text style={styles.watchName}>DAY DATE 40</Text>
            <Text style={styles.watchType}>Classic</Text>
            <Text style={styles.watchPrice}>R$ 55.890</Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('../../../watches/submariner.png')} style={styles.watchImage} />
            <Text style={styles.watchName}>SUBMARINER</Text>
            <Text style={styles.watchType}>Classic</Text>
            <Text style={styles.watchPrice}>R$ 85.450</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('../../../watches/explorerII.png')} style={styles.watchImage} />
            <Text style={styles.watchName}>EXPLORER II</Text>
            <Text style={styles.watchType}>Classic</Text>
            <Text style={styles.watchPrice}>R$ 50.750</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.box}>
            <Image source={require('../../../watches/explorer.png')} style={styles.watchImage} />
            <Text style={styles.watchName}>EXPLORER</Text>
            <Text style={styles.watchType}>Classic</Text>
            <Text style={styles.watchPrice}>R$ 39.850</Text>
          </View>
        </TouchableOpacity>
        
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