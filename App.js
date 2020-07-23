import 'react-native-gesture-handler';
import * as React from 'react';
import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import { AntDesign, MaterialIcons, Ionicons} from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import BuyingScreen from './src/screens/buyingScreen'

const Stack = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode='none' initialRouteName="BuyingScreen">
        <Stack.Screen name="BuyingScreen" component={BuyingScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}