import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import SampleScreen from "./src/screens/sampleScreen";
import BuyingScreen from "./src/screens/buyingScreen";
import PillowScreen from "./src/screens/pillowScreen";
import CongratulationScreen from "./src/screens/congratulationScreen";
import NotFoundScreen from "./src/screens/notFoundScreen";
import Test from "./src/screens/testScreen";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none" initialRouteName="SampleScreen">
        <Stack.Screen
          name="SampleScreen"
          component={SampleScreen}
          initialParams={{ information: false }}
        />
        <Stack.Screen name="BuyingScreen" component={BuyingScreen} />
        <Stack.Screen name="PillowScreen" component={PillowScreen} />
        <Stack.Screen
          name="CongratulationScreen"
          component={CongratulationScreen}
        />
        <Stack.Screen name="NotFoundScreen" component={NotFoundScreen} />
        <Stack.Screen name="Test" component={Test} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
