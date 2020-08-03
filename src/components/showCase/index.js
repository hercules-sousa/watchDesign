import react from 'react'

const ShowCase = (props) => {
  return (
    <TouchableOpacity key={model} onPress={() => navigation.navigate('BuyingScreen', {
      'model': model,
      'uri': data.uri,
      'composition': data.composition,
      'price': data.price,
    })}>
      <View style={styles.box}>
        <Image source={{ uri: data.uri }} style={styles.watchImage}/>
        <Text style={styles.watchName}>{model.toUpperCase()}</Text>
        <Text style={styles.watchType}>Classic</Text>
        <Text style={styles.watchPrice}>{data.price}</Text>
      </View>
    </TouchableOpacity>
  )
}

export default ShowCase