import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Arrow({ onPress, opacity }) {
  return (
    <AntDesign
      name="left"
      size={25}
      color="black"
      onPress={onPress}
      style={[styles.arrow, { opacity }]}
    />
  );
}
const styles = StyleSheet.create({
  arrow: {
    alignSelf: "flex-start",
    marginLeft: 10,
    marginTop: 45
  },
});
