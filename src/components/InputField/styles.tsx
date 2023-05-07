import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
  },
  input: {
    width: 271,
    height: 54,
    color: "#F2F2F2",
    fontSize: 16,
    fontWeight: "400",
    backgroundColor: "#262626",
    borderRadius: 6,
    borderWidth: 1,
    padding: 16, 
    borderColor: "#000",
 
  },
  button: {
    height: 52,
    width: 52,
    backgroundColor: "#1E6F9F",
    borderRadius: 6,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFFFFF",
  },
  inputField: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    top: -25
},
});
