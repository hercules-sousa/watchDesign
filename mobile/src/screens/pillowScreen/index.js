import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

import { getLocalHost } from '../../utils'

const PillowScreen = ({ route, navigation }) => {
  const { model } = route.params;

  const [localHost, setLocalHost] = useState("");

  useEffect(() => {
    setLocalHost(getLocalHost());
  }, []);

  return (
    <View>
      <Text>{model}</Text>
      <Image
        source={{
          uri: `http://${localHost}:3333/pillow-images/pillowDatejust36.png`,
        }}
        style={{ width: 180, height: 180 }}
      />
    </View>
  );
};

export default PillowScreen;
