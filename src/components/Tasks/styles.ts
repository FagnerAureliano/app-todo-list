import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    backgroundColor: "#333333",
    borderRadius: 8,
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
    paddingLeft:12,
  },
  name: {
    flex: 1,
    fontSize: 16,
    color: "#FFF",
    marginLeft: 16,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "bold",
  },
  button: {
    width: 56,
    height: 56,
    backgroundColor: "#333333",
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  checkbox: {
    margin: 8,
    borderRadius:12
  },
});
