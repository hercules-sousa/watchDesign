import React from 'react'
import { Text, View } from 'react-native'

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

const Test = () => {

  function showWatches(){
    Object.keys(watches).forEach((key) => {
      return (<Text style={{ color: '#000' }}>{watches[key]}</Text>)
    })
  }

  return (
    <View>
      <Text>asdfasdf</Text>
      {showWatches}
    </View>
  )
}

export default Test