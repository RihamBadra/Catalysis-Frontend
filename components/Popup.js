import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

export default function Popup({ setPop }) {
  const { width } = useWindowDimensions();
  const [back, setBack] = useState("white");
  const [back1, setBack1] = useState("white");
  const [back2, setBack2] = useState("white");
  const [back3, setBack3] = useState("white");

  

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.center,
          {
            width,
            backgroundColor: back,
            height: width / 4,
          },
        ]}
        onPressIn={() => {
          setBack("gray");
        }}
        onPressOut={() => {
          setBack("white");
        }}
        onPress={() => {
          setPop(false);
        }}
      >
        <Text style={styles.larger}>Copy Link</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.center,
          {
            width,
            backgroundColor: back1,
            height: width / 4,
          },
        ]}
        onPressIn={() => {
          setBack1("gray");
        }}
        onPressOut={() => {
          setBack1("white");
        }}
        onPress={() => setPop(false)}
      >
        <Text style={styles.larger}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.center,
          {
            width,
            backgroundColor: back2,
            height: width / 4,
          },
        ]}
        onPressIn={() => {
          setBack2("gray");
        }}
        onPressOut={() => {
          setBack2("white");
        }}
        onPress={() => setPop(false)}
      >
        <Text style={styles.larger}>Share to...</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.center,
          {
            width,
            backgroundColor: back3,
            height: width / 4,
          },
        ]}
        onPressIn={() => {
          setBack3("gray");
        }}
        onPressOut={() => {
          setBack3("white");
        }}
        onPress={() => setPop(false)}
      >
        <Text style={styles.larger}>Hide</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
  larger: {
    fontSize: 18,
  },
});
