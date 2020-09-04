import React from "react";
import { SafeAreaView, View } from "react-native";
import Lottie from "lottie-react-native";

import like from "../../assets/animations/like.json";

const CongratulationScreen = () => {
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "80%",
        }}
      >
        <Lottie autoSize resizeMode="contain" source={like} autoPlay />
      </View>
    </SafeAreaView>
  );
};

export default CongratulationScreen;
