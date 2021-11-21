import React from "react";
import { View, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Arrow({ onPress, opacity, color }) {
  return (
    <AntDesign
      name="left"
      size={25}
      color="black"
      onPress={onPress}
      style={[styles.arrow, { opacity, color }]}
    />
  );
}
const styles = StyleSheet.create({
  arrow: {
    left: 10,
    position: "absolute",
    top: 55,
    zIndex: 10,
  },
});
