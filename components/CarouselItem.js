import React from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CarouselItem({ item }) {
  const { width } = useWindowDimensions();

  return (
    <View style={{ width }}>
      <Image
        style={[styles.image, { width }]}
        source={require("../assets/25c02c0fc382e61b7a61b03a9c627121.jpeg")}
      />
      <View style={styles.textView}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Text style={styles.itemDescription}>{item.description}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textView: {
    flex: 1,
  },
  image: {
    flex: 1.3,
  },
  itemTitle: {
    flex: 1,
    fontWeight: "bold",
    fontSize: 28,
    color: "#2a67a0",
    textAlign: "center",
  },
  itemDescription: {
    flex: 2,
    fontSize: 24,
    color: "#316fa9",
    textAlign: "center",
    paddingHorizontal: 30,
  },
});
