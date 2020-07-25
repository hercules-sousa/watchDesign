import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { render } from 'react-dom'

const Test = () => {

  let watches = {
    'datejust 36': {
      'info': 'Oyster, 36 mm, aço Oystersteel e ouro branco',
      'price': 'R$ 51.850',
    },
    'datejust 41': {
      'info': 'Oyster, 41 mm, aço Oystersteel e ouro amarelo',
      'price': 'R$ 80.150',
    },
    'datejust 31': {
      'info': 'Oyster, 41 mm, aço Oystersteel e ouro amarelo',
      'price': 'R$ 72.300',
    },
    'datejust 34': {
      'info': 'Oyster, 34 mm, aço Oystersteel',
      'price': 'R$ 39.550',
    },
    'daydate 40': {
      'info': 'Oyster, 40 mm, ouro amarelo',
      'price': 'R$ 55.890',
    },
    'submariner': {
      'info': 'Oyster, 40 mm, aço Oystersteel e ouro amarelo',
      'price': 'R$ 85.450',
    },
    'explorer': {
      'info': 'Oyster, 42 mm, aço Oystersteel',
      'price': 'R$ 50.750',
    },
    'explorerII': {
      'info': 'Oyster, 42 mm, aço Oystersteel',
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
      <Text>{watches["datejust 31"].info}</Text>
      {createArray()}
      {arrWatches.map(item => {
        item.map(watchData => {
          if(typeof(watchData) === 'string'){
            return (<Text>{watchData}</Text>)
          }
        })
      })}
    </View>
  )
}

export default Test

/*
let watches = {
  'datejust 36': {
    'info': 'Oyster, 36 mm, aço Oystersteel e ouro branco',
    'price': 'R$ 51.850',
  },
  'datejust 41': {
    'info': 'Oyster, 41 mm, aço Oystersteel e ouro amarelo',
    'price': 'R$ 80.150',
  },
  'datejust 31': {
    'info': 'Oyster, 41 mm, aço Oystersteel e ouro amarelo',
    'price': 'R$ 72.300',
  },
  'datejust 34': {
    'info': 'Oyster, 34 mm, aço Oystersteel',
    'price': 'R$ 39.550',
  },
  'daydate 40': {
    'info': 'Oyster, 40 mm, ouro amarelo',
    'price': 'R$ 55.890',
  },
  'submariner': {
    'info': 'Oyster, 40 mm, aço Oystersteel e ouro amarelo',
    'price': 'R$ 85.450',
  },
  'explorer': {
    'info': 'Oyster, 42 mm, aço Oystersteel',
    'price': 'R$ 50.750',
  },
  'explorerII': {
    'info': 'Oyster, 42 mm, aço Oystersteel',
    'price': 'R$ 50.750',
  },
}

Object.keys(watches).forEach((model) => {
  console.log(model)
  console.log(watches[model])
})
*/