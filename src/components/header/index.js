import React from 'react'
import { View, StyleSheet } from 'react-native'
import { AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';

const Header = () => {
  return (
    <View style={styles.header}>
      <MaterialIcons style={styles.icons} name="filter-list" size={32} color="black"/>
      <Ionicons style={styles.icons} name="ios-infinite" size={32} color="black" />
      <AntDesign style={styles.icons} name="search1" size={32} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingTop: 40,
    paddingHorizontal: 24,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  
  icons: {
    bottom: 8
  }
})



export default Header