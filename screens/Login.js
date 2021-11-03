import React from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <View style={styles.container0}></View>
      </View>
      <View style={styles.container2}>
        <View style={styles.text1}></View>
        <View style={styles.text2}></View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  container1: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    padding: 50,
    borderColor: "black",
    borderWidth: 1,
  },
  container2: {
    flex: 1,
    // padding: 50,
    flexDirection: "row",
    // justifyContent: "space-between",
    alignItems: "flex-end",
    borderColor: "black",
    borderWidth: 1,
  },
  text1: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: "blue",
  },
  text2: {
    flex: 2,
    aspectRatio: 1,
    backgroundColor: "red",
  },
  container0: {
    flex: 1,
    // width: 50,
    aspectRatio: 1,
    backgroundColor: "green",
    borderColor: "black",
    borderWidth: 1,
  },
});
