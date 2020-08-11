import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  addCartButton: {
    backgroundColor: '#aa7e6f',
    width: 200,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 32,
    padding: 32,
  },

  textAddCartButton: {
    color: '#fffaf7',
    fontSize: 16
  },
  
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  imageConfig: {
    width: '50%',
    height: '50%',
  },

  textModel: {
    fontWeight: 'bold',
    fontSize: 36,
    fontStyle: 'normal',
    fontFamily: 'Roboto'
  },
  
  textBold: {
    fontWeight: 'bold',
    fontSize: 16
  },

  textPrice: {
    color: '#806261',
    padding: 16,
    fontSize: 24,
    fontFamily: 'sans-serif'
  },

  icons: {
    backgroundColor: '#aa7e6f', 
    padding: 16, 
    borderRadius: 36,
  },
})

export default styles