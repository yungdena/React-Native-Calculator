import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  displayContainer: {
    flex: 2,
    backgroundColor: "black",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    padding: 20,
    width: "100%",
  },
  displayValue: {
    color: "white",
    fontSize: 60,
  },
  buttonContainer: {
    flex: 4,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonDarkGrey: {
    backgroundColor: "#353535",
    alignItems: "center",
    justifyContent: "center",
    width: 85,
    height: 85,
    margin: 5,
    borderRadius: 50,
  },
  buttonDarkGreyBig: {
    backgroundColor: "#353535",
    alignItems: "flex-start",
    paddingLeft: 30,
    justifyContent: "center",
    width: 180,
    height: 85,
    margin: 5,
    borderRadius: 50,
  },
  buttonLightGrey: {
    backgroundColor: "#777777",
    alignItems: "center",
    justifyContent: "center",
    width: 85,
    height: 85,
    margin: 5,
    borderRadius: 50,
  },
  buttonOrange: {
    backgroundColor: "#F69D14",
    alignItems: "center",
    justifyContent: "center",
    width: 85,
    height: 85,
    margin: 5,
    borderRadius: 50,
  },
  buttonTextLight: {
    color: "white",
    fontSize: 40,
  },
  buttonTextDark: {
    color: "#000000",
    fontSize: 40,
  },
});