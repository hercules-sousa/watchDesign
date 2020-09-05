import React, { useState, useEffect } from "react";
import { Text, View, ScrollView, Image, TouchableOpacity } from "react-native";

import styles from "./styles";
import Header from "../../components/header";
import API from "../../services/API";
import { getBackendAddress } from "../../utils";

const SampleScreen = ({ navigation, route }) => {
  const [watchData, setWatchData] = useState([]);
  const { restart } = route.params;

  function createArray(givenObject) {
    let bidimensionalArrayWatches = [];
    Object.keys(givenObject).forEach((model) => {
      let arr = [];
      arr.push(model);
      arr.push(givenObject[model]);
      bidimensionalArrayWatches.push(arr);
    });
    return bidimensionalArrayWatches;
  }

  function setWatches() {
    API.get("watches")
      .then((response) => {
        console.log("Got watch informations with API");
        let bidimensionalArrayWatches = createArray(response.data);
        setWatchData(bidimensionalArrayWatches);
      })
      .catch((err) => {
        fetch(`http://${getBackendAddress}:3333/watches`)
          .then(function (answer) {
            console.log("Got watch information with fetch");
            let bidimensionalArrayWatches = createArray(answer);
            setWatchData(bidimensionalArrayWatches);
          })
          .catch((err) => {
            console.log(err);

            setTimeout(() => {
              navigation.navigate("NotFoundScreen");
            }, 3000);
          });
      });
  }

  useEffect(() => {
    setWatches();
  }, []);

  if (restart) {
    setWatches();
  }

  return (
    <View style={styles.container}>
      <Header />

      <ScrollView contentContainerStyle={styles.body}>
        {watchData.map((watchArray) => {
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
