import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";

import { getBackendAddress } from "../../utils";
import Header from "../../components/header";
import BottomButtons from "../../components/bottomButtons";

const PillowScreen = ({ route }) => {
  const { model } = route.params;

  const [localHost, setLocalHost] = useState("");
  const [pillowColor, setPillowColor] = useState("gray");
  const [bgGray, setBgGray] = useState(true);
  const [bgBlack, setBgBlack] = useState(false);
  const [bgBlue, setBgBlue] = useState(false);

  useEffect(() => {
    setLocalHost(getBackendAddress());
  }, []);

  function getPillowWatchName(watch) {
    watch = watch.split(" ").join("");
    console.log(watch);
    return watch;
  }

  function handleChangeOfPillowColor(color) {
    setPillowColor(color);
    if (color === "gray") {
      setBgGray(true);
      setBgBlack(false);
      setBgBlue(false);
    }
    if (color === "black") {
      setBgGray(false);
      setBgBlack(true);
      setBgBlue(false);
    }
    if (color === "blue") {
      setBgGray(false);
      setBgBlack(false);
      setBgBlue(true);
    }
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
          // onLoad
        />

        <View style={{ marginVertical: 16, alignItems: "center" }}>
          <Text
            style={{
              fontFamily: "sans-serif-condensed",
              fontWeight: "bold",
              color: "black",
              fontSize: 32,
            }}
          >
            Pillow Color
          </Text>
          <Text style={{ fontFamily: "notoserif" }}>
            Choose the color of the pillow:
          </Text>
        </View>

        <View style={{ flexDirection: "row" }}>
          <TouchableOpacity
            style={{
              backgroundColor: bgBlack ? "black" : "#f5f5f5",
              padding: 8,
              borderRadius: 32,
              borderWidth: 1,
              borderColor: "black",
              marginHorizontal: 8,
            }}
            onPress={() => {
              handleChangeOfPillowColor("black");
            }}
          >
            <View
              style={{
                backgroundColor: "black",
                width: 40,
                height: 40,
                borderRadius: 32,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: bgGray ? "gray" : "#f5f5f5",
              padding: 8,
              borderRadius: 32,
              borderWidth: 1,
              borderColor: "black",
              marginHorizontal: 8,
            }}
            onPress={() => {
              handleChangeOfPillowColor("gray");
            }}
          >
            <View
              style={{
                backgroundColor: "gray",
                width: 40,
                height: 40,
                borderRadius: 32,
              }}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: bgBlue ? "blue" : "#f5f5f5",
              padding: 8,
              borderRadius: 32,
              borderWidth: 1,
              borderColor: "black",
              marginHorizontal: 8,
            }}
            onPress={() => {
              handleChangeOfPillowColor("blue");
            }}
          >
            <View
              style={{
                backgroundColor: "blue",
                width: 40,
                height: 40,
                borderRadius: 32,
              }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <BottomButtons
        buttonText="Finish buying"
        destinationScreenName="CongratulationScreen"
      />
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
