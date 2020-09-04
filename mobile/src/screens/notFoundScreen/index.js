import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import Lottie from "lottie-react-native";

import notFound from "../../assets/animations/notFound.json";

const NotFoundScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <View style={{ width: "80%", height: "50%", marginTop: "30%" }}>
        <Lottie source={notFound} resizeMode="contain" autoPlay loop />
      </View>

      <Text>Sorry, server is not responding</Text>

      <TouchableOpacity
        style={{
          backgroundColor: "#c2c",
          paddingVertical: 16,
          paddingHorizontal: 32,
          borderRadius: 8,
          marginTop: 16,
        }}
        onPress={() => {
          navigation.navigate("SampleScreen", {
            restart: true,
          });
        }}
      >
        <Text style={{ color: "white" }}>Try again</Text>
      </TouchableOpacity>
    </View>
  );
};

export default NotFoundScreen;
