import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { render } from 'react-dom'

const Test = () => {

  let watches = {
    'datejust 36': {
      'composition': 'Oyster, 36 mm, aço Oystersteel e ouro branco',
      'price': 'R$ 51.850',
    },
    'datejust 41': {
      'composition': 'Oyster, 41 mm, aço Oystersteel e ouro amarelo',
      'price': 'R$ 80.150',
    },
    'datejust 31': {
      'composition': 'Oyster, 41 mm, aço Oystersteel e ouro amarelo',
      'price': 'R$ 72.300',
    },
    'datejust 34': {
      'composition': 'Oyster, 34 mm, aço Oystersteel',
      'price': 'R$ 39.550',
    },
    'daydate 40': {
      'composition': 'Oyster, 40 mm, ouro amarelo',
      'price': 'R$ 55.890',
    },
    'submariner': {
      'composition': 'Oyster, 40 mm, aço Oystersteel e ouro amarelo',
      'price': 'R$ 85.450',
    },
    'explorer': {
      'composition': 'Oyster, 42 mm, aço Oystersteel',
      'price': 'R$ 50.750',
    },
    'explorerII': {
      'composition': 'Oyster, 42 mm, aço Oystersteel',
      'price': 'R$ 50.750',
    },
  }

  let arrWatches = []

  function createArray(){
    Object.keys(watches).forEach((model) => {
      let arr = []
      arr.push(model)
      arr.push(watches[model])
      arrWatches.push(arr)
      // console.log(arrWatches)
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