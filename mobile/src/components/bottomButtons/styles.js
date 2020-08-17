import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  buttonContainer: {
    width: "100%",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  icons: {
    backgroundColor: "#aa7e6f",
    padding: 16,
    borderRadius: 36,
  },
  addCartButton: {
    backgroundColor: "#aa7e6f",
    width: 200,
    height: 32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 32,
    padding: 32,
  },
  textAddCartButton: {
    color: "#fffaf7",
    fontSize: 16,
  },
});

export default styles;
