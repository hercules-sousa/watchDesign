import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../../components/header";

import styles from "./styles";
import BottomButtons from "../../components/bottomButtons";

const BuyingScreen = ({ route, navigation }) => {
  let { model, uri, price, composition } = route.params;

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
