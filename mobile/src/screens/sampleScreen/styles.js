import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fffff9",
  },

  box: {
    width: 136,
    height: 174,
    backgroundColor: "#f5f5f5",
    marginTop: 32,
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: 24,
  },

  body: {
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 80,
  },

  watchImage: {
    position: "absolute",
    top: -40,
    width: 128,
    height: 128,
  },

  watchName: {
    fontSize: 16,
  },

  watchType: {
    fontSize: 14,
    color: "#d1d1d1",
  },

  watchPrice: {
    color: "#806261",
    marginBottom: 24,
  },
});

export default styles;
