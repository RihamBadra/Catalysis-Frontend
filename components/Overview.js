import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Overview({ info }) {
  return (
    <ScrollView style={styles.overview}>
      <Text>{info.overview}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  overview: { flex: 1, padding: "5%" },
});
