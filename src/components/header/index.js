import React from 'react'
import { StyleSheet } from 'react-native'
import { AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';
import PropTypes from 'prop-types'
import { Badger } from 'react-native-elements'

import Container from './styles'

const Header = (props) => {
  return (
    <Container {...props}>
      <MaterialIcons style={styles.icons} name="filter-list" size={32} color="black"/>
      <Ionicons style={styles.icons} name="ios-infinite" size={32} color="black" />
      <AntDesign style={styles.icons} name="search1" size={32} color="black" />
    </Container>
  )
}

Header.propTypes = {
  paddingTop: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  badger: PropTypes.number,
}

Header.defaultProps = {
  paddingTop: 40,
  paddingHorizontal: 24,
  flexDirection: 'row',
  justifyContent: 'space-between',
  badger: 0,
}

const styles = StyleSheet.create({  
  icons: {
    bottom: 8
  }
})

export default Header