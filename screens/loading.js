import React, { Component, useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function Loading({ navigation }) {
  const [state, setState] = useState(true);

  const closeActivityIndicator = () =>
    setTimeout(
      () => {
        setState(false);
        navigation.navigate("Loading2");
      },

      3000
    );

  useEffect(() => closeActivityIndicator());

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 28,
          color: "#004E96",
          textAlign: "center",
        }}
      >
        We are setting up your feed ...{" "}
      </Text>
      {console.log(state)}
      <ActivityIndicator
        animating={state}
        color="#002F67"
        size="large"
        style={styles.activityIndicator}
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
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    height: 80,
  },
});
{
  /* <View style={{ flex: 1, justifyContent: "center" }}>
       <Text style={{ fontWeight: 'bold',paddingBottom:"15%",fontSize:28,color:"#004E96",textAlign:"center"}}>
       We are setting up 
your feed ... </Text> */
}
