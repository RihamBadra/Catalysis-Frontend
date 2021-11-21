import React from "react";
import {
  Text,
  View,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";

export default function Popup({ setPop, hideClass, saveClass, item, found }) {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[
          styles.center,
          {
            width,
            height: width / 5,
          },
        ]}
        onPress={() => setPop(false)}
      >
        <Text style={styles.larger}>Report</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.center,
          {
            width,
            height: width / 5,
          },
        ]}
        onPress={() => setPop(false)}
      >
        <Text style={styles.larger}>Copy Link</Text>
      </TouchableOpacity>
      <TouchableOpacity
        disabled={found}
        style={[
          styles.center,
          {
            width,
            height: width / 5,
          },
        ]}
        onPress={() => {
          saveClass(item);
          setPop(false);
        }}
      >
        <Text style={[styles.larger, { opacity: found ? 0.5 : 1 }]}>Save</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.center,
          {
            width,
            height: width / 5,
          },
        ]}
        onPress={() => {
          setPop(false);
        }}
      >
        <Text style={styles.larger}>Share to...</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[
          styles.center,
          {
            width,
            height: width / 5,
          },
        ]}
        onPress={() => {
          hideClass(item);
          setPop(false);
        }}
      >
        <Text style={styles.larger}>Hide</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    justifyContent: "space-evenly",
    alignItems: "center",
    zIndex: 10,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
  larger: {
    fontSize: 18,
  },
});
