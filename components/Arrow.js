import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Arrow({ onPress, margin }) {
  return (
    <AntDesign
      name="left"
      size={25}
      color="black"
      onPress={onPress}
      style={[styles.arrow, { marginTop: margin }]}
    />
  );
}
const styles = StyleSheet.create({
  arrow: {
    alignSelf: "flex-start",
    marginLeft: 10,
  },
});
