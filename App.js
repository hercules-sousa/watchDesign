import React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="filter-list" size={32} color="black"/>
        <Ionicons name="ios-infinite" size={32} color="black" />
        <AntDesign name="search1" size={32} color="black" />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.box}>
          <Image source={require('./watches/datejust36.png')} style={styles.watchImage} />
          <Text style={styles.watchName}>DATEJUST 36</Text>
          <Text style={styles.watchType}>Classic</Text>
          <Text style={styles.watchPrice}>R$ 51.850</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./watches/datejust36.png')} style={styles.watchImage} />
          <Text style={styles.watchName}>DATEJUST 36</Text>
          <Text style={styles.watchType}>Classic</Text>
          <Text style={styles.watchPrice}>R$ 51.850</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./watches/datejust36.png')} style={styles.watchImage} />
          <Text style={styles.watchName}>DATEJUST 36</Text>
          <Text style={styles.watchType}>Classic</Text>
          <Text style={styles.watchPrice}>R$ 51.850</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./watches/datejust36.png')} style={styles.watchImage} />
          <Text style={styles.watchName}>DATEJUST 36</Text>
          <Text style={styles.watchType}>Classic</Text>
          <Text style={styles.watchPrice}>R$ 51.850</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./watches/datejust36.png')} style={styles.watchImage} />
          <Text style={styles.watchName}>DATEJUST 36</Text>
          <Text style={styles.watchType}>Classic</Text>
          <Text style={styles.watchPrice}>R$ 51.850</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./watches/datejust36.png')} style={styles.watchImage} />
          <Text style={styles.watchName}>DATEJUST 36</Text>
          <Text style={styles.watchType}>Classic</Text>
          <Text style={styles.watchPrice}>R$ 51.850</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./watches/datejust36.png')} style={styles.watchImage} />
          <Text style={styles.watchName}>DATEJUST 36</Text>
          <Text style={styles.watchType}>Classic</Text>
          <Text style={styles.watchPrice}>R$ 51.850</Text>
        </View>
        <View style={styles.box}>
          <Image source={require('./watches/datejust36.png')} style={styles.watchImage} />
          <Text style={styles.watchName}>DATEJUST 36</Text>
          <Text style={styles.watchType}>Classic</Text>
          <Text style={styles.watchPrice}>R$ 51.850</Text>
        </View>
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
    paddingTop: 32,
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
  }
});