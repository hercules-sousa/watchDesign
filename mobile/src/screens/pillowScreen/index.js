import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";
import Constants from "expo-constants";
const { manifest } = Constants;

const PillowScreen = ({ route, navigation }) => {
  const { model } = route.params;

  const [localHost, setLocalHost] = useState("");

  useEffect(() => {
    setLocalHost(manifest.hostUri.split(":")[0]);
  }, []);

  return (
    <View>
      <Text>{model}</Text>
      <Image
        source={{
          uri: `http://${localHost}:3333/pillow-images/pillowDatejust36.png`,
        }}
        style={{ width: 80, height: 80 }}
      />
    </View>
  );
};

export default PillowScreen;
