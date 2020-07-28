import React from 'react'
import { Text, View } from 'react-native'

import watches from '../../database'

const Test = () => {

  let arrWatches = []

  function createArray(){
    Object.keys(watches).forEach((model) => {
      let arr = []
      arr.push(model)
      arr.push(watches[model])
      arrWatches.push(arr)
    })
  }


  return (
    <View>
      <Text>{watches["datejust 31"].composition}</Text>
      {createArray()}
      {arrWatches.map(watchArray => {
        let model = watchArray[0]
        let data = watchArray[1]
        return (
          <View key={model}>
            <Text>{model}</Text>
            <Text>{data.composition}</Text>
          </View>
        )
      })}
    </View>
  )
}

export default Test