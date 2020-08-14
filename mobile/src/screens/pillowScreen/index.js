import React, { useState, useEffect } from "react";
import { View, Text, Image } from "react-native";

import { getLocalHost } from '../../utils'

const PillowScreen = ({ route, navigation }) => {
  const { model } = route.params;

  const [localHost, setLocalHost] = useState("");

  useEffect(() => {
    setLocalHost(getLocalHost());
  }, []);

  function getPillowWatchName(watch) {
    watch = watch.split(" ").join("")
    watch = "pillow" + watch[0].toUpperCase() + watch.slice(1)
    return watch
  }

  return (
    <View>
      <Image
        source={{
          uri: `http://${localHost}:3333/pillow-images/${getPillowWatchName(model)}.png`,
        }}
        style={{ width: 180, height: 180 }}
      />
    </View>
  );
};

export default PillowScreen;
