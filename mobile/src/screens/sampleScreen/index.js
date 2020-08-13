import React, { useState, useEffect } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

import styles from "./styles";
import Header from "../../components/header";
import watches from "../../database";

const SampleScreen = ({ navigation }) => {
  const [watchData, setWatchData] = useState([])

  let arrWatches = [];

  function createArray() {
    Object.keys(watches).forEach((model) => {
      let arr = [];
      arr.push(model);
      arr.push(watches[model]);
      arrWatches.push(arr);
    });
  }

  useEffect(() => {
    
  }, [])

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.body}>
        {createArray()}
        {
          console.log(watchData)
        }
        {arrWatches.map((watchArray) => {
          let model = watchArray[0];
          let data = watchArray[1];
          return (
            <TouchableOpacity
              key={model}
              onPress={() =>
                navigation.navigate("BuyingScreen", {
                  model: model,
                  uri: data.uri,
                  composition: data.composition,
                  price: data.price,
                })
              }
            >
              <View style={styles.box}>
                <Image source={{ uri: data.uri }} style={styles.watchImage} />
                <Text style={styles.watchName}>{model.toUpperCase()}</Text>
                <Text style={styles.watchType}>Classic</Text>
                <Text style={styles.watchPrice}>{data.price}</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default SampleScreen;
