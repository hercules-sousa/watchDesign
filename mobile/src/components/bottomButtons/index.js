import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { Feather, AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import styles from "./styles";

const BottomButtons = ({ destinationScreenName, model, buttonText }) => {
  const navigation = useNavigation();

  return (
    <View style={{ position: "absolute", bottom: 2, width: "100%" }}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => navigation.goBack()}
        >
          <AntDesign name="arrowleft" size={24} color="white" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            navigation.navigate(destinationScreenName, {
              model,
            })
          }
          style={styles.addCartButton}
        >
          <Text style={styles.textAddCartButton}>{buttonText}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.icons}>
          <Feather name="save" size={24} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{ alignItems: "center", padding: 16 }}>
        <TouchableOpacity
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: "90%",
            height: 56,
          }}
        >
          <Text style={{ color: "#a9a9a9", fontSize: 16 }}>About</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomButtons;
