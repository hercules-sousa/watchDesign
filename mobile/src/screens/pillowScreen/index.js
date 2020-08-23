import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

import { getLocalHost } from "../../utils";
import Header from "../../components/header";
import BottomButtons from "../../components/bottomButtons";

const PillowScreen = ({ route }) => {
  const { model } = route.params;

  const [localHost, setLocalHost] = useState("");
  const [pillowColor, setPillowColor] = useState("gray");

  useEffect(() => {
    setLocalHost(getLocalHost());
  }, []);

  function getPillowWatchName(watch) {
    watch = watch.split(" ").join("");
    return watch;
  }

  

  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.body}>
        <Image
          source={{
            uri: `http://${localHost}:3333/pillow-images/${pillowColor}/${getPillowWatchName(
              model
            )}.png`,
          }}
          style={styles.pillowImage}
        />
      </View>

      <BottomButtons buttonText="Finish buying" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pillowImage: {
    width: 260,
    height: 260,
  },
  body: {
    flex: 1,
    alignItems: "center",
  },
});

export default PillowScreen;
