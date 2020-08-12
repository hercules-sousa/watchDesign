import React from "react";
import { View, Text, Image } from "react-native";

const PillowScreen = ({ route, navigation }) => {
  const { model } = route.params;

  return (
    <View>
      <Text>{model}</Text>
      <Image source={{ uri: 'http://192.168.100.16:3333/pillow-images/pillowDatejust36.png' }} style={{ width: 80, height: 80 }} />
    </View>
  );
};

export default PillowScreen;
