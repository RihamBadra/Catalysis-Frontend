import React from "react";
import { View, StyleSheet, Text } from "react-native";

export default function Overview({ info }) {
  return (
    <View style={styles.overview}>
      <Text>{info.overview}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  overview: { flex: 1, paddingHorizontal: "5%", paddingTop: "5%" },
});
