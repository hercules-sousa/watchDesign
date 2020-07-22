import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name="filter-list" size={32} color="black" />
        <Ionicons name="ios-infinite" size={32} color="black" />
        <AntDesign name="search1" size={32} color="black" />
      </View>

      <ScrollView contentContainerStyle={styles.body}>
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
        <View style={styles.box} />
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
    height: 136,
    backgroundColor: '#666',
    borderWidth: 5,
    borderColor: '#999',
    margin: 16,
  },

  header: {
    paddingTop: 24,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  body: {
    marginTop: 32,
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'space-between',
  }
});
