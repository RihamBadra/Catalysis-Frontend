import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet } from "react-native";

export default function Button({ text, onPress }) {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={onPress}>
      <View style={styles.btn}>
        <Text style={styles.btnText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 0.2,
    width: 270,
  },
  btn: {
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: "#002f67",
  },
  btnText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
});
