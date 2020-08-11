import React from 'react'
import { View, Text, Image } from 'react-native'

const PillowScreen = ({ route, navigation }) => {
  const { model } = route.params

  function buildPillowName() {
    let pillowName = String()
    model.split(' ').map(word => {
      pillowName += word
    })
    pillowName = pillowName[0].toUpperCase() + pillowName.slice(1)
    pillowName = '../../pillowWatches/pillow' + pillowName + '.png'
    return pillowName
  }
  
  const pillowName = buildPillowName()
  console.log(pillowName)
  
  return (
    <View>
      <Text></Text>
      <Text>{model}</Text>
      <Text>{pillowName}</Text>
    </View>
  )
}

export default PillowScreen