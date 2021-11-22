import React from "react";
import { ScrollView, StyleSheet, Text } from "react-native";

export default function Overview({ info }) {
  return (
    <ScrollView style={styles.overview} bounces={false}>
      <Text>{info.overview}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  overview: { flex: 1, paddingHorizontal: "5%", paddingTop: "5%" },
});
