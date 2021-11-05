import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Arrow({ onPress }) {
  return (
    <AntDesign
      name="left"
      size={25}
      color="black"
      style={styles.arrow}
      onPress={onPress}
    />
  );
}
const styles = StyleSheet.create({
  arrow: {
    marginTop: 60,
    alignSelf: "flex-start",
    marginLeft: 10,
  },
});
