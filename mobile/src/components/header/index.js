import React from "react";
import { StyleSheet, View } from "react-native";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import PropTypes from "prop-types";

import { Container } from "./styles";

const Header = (props) => {
  return (
    <View>
      <Container {...props}>
        <MaterialIcons
          style={styles.icons}
          name="filter-list"
          size={32}
          color="black"
        />
        <Ionicons
          style={styles.icons}
          name="ios-infinite"
          size={32}
          color="black"
        />
        <AntDesign
          style={styles.icons}
          name="search1"
          size={32}
          color="black"
        />
      </Container>
      <View
        style={{
          width: 8,
          position: "absolute",
          alignSelf: "center",
          marginTop: 32,
        }}
      >
        {props.children}
      </View>
    </View>
  );
};

Header.propTypes = {
  paddingTop: PropTypes.number,
  paddingHorizontal: PropTypes.number,
  flexDirection: PropTypes.string,
  justifyContent: PropTypes.string,
  badger: PropTypes.number,
};

Header.defaultProps = {
  paddingTop: 18,
  paddingHorizontal: 24,
  flexDirection: "row",
  justifyContent: "space-between",
};

const styles = StyleSheet.create({
  icons: {
    bottom: 8,
  },
});

export default Header;
