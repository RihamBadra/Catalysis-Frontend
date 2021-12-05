import React, { Component, useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import LottieView from "lottie-react-native";

export default function Loading2({ navigation }) {
  const closeActivityIndicator = () =>
    setTimeout(() => {
      navigation.navigate("Home");
    }, 5000);

  useEffect(() => closeActivityIndicator());

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 28,
          color: "#004E96",
          textAlign: "center",
          marginBottom: 10,
        }}
      >
        Your feed is set you are ready to go!
      </Text>
      <LottieView
        source={require("../assets/12936-donefirstanim.json")}
        style={styles.lottie}
        autoPlay
        loop={false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
  },
  activityIndicator: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
  lottie: {
    height: 50,
  },
});
