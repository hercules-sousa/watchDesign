import React from "react";
import { View, Text, Image } from "react-native";

import styles from "./styles";
import Header from "../../components/header";
import BottomButtons from "../../components/bottomButtons";
import { isThereConnectionWithAPI } from "../../utils";

const BuyingScreen = ({ navigation, route }) => {
  let { model, uri, price, composition } = route.params;

  isThereConnectionWithAPI().catch((err) => {
    navigation.navigate("NotFoundScreen");
  });

  return (
    <View style={styles.container}>
      <Header />

      <View style={{ flex: 1, alignItems: "center" }}>
        <Image source={{ uri: uri }} style={styles.imageConfig} />

        <Text style={styles.textModel}>
          {model[0].toUpperCase() + model.slice(1)}
        </Text>

        <Text style={styles.textPrice}>{price}</Text>

        <Text style={styles.textBold}>Compostion:</Text>
        <Text>{composition}</Text>
      </View>

      <BottomButtons
        model={model}
        destinationScreenName="PillowScreen"
        buttonText="Add to cart"
      />
    </View>
  );
};

export default BuyingScreen;
