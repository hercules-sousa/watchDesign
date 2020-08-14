import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { getLocalHost } from '../../utils'
import Header from '../../components/header'

const PillowScreen = ({ route, navigation }) => {
  const { model } = route.params;

  const [localHost, setLocalHost] = useState("");

  useEffect(() => {
    setLocalHost(getLocalHost());
  }, []);

  function getPillowWatchName(watch) {
    watch = watch.split(" ").join("")
    return watch
  }

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        <Image
          source={{
            uri: `http://${localHost}:3333/pillow-images/${getPillowWatchName(model)}.png`,
          }}
          style={styles.pillowImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pillowImage: {
    width: 300,
    height: 300,
  },
  body: {
    flex: 1,
    alignItems: "center",
  }
})

export default PillowScreen;
