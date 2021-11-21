import React from "react";
import { Text, StyleSheet, TouchableOpacity } from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  FontAwesome5,
} from "@expo/vector-icons";

export default function Settings({ navigation, name, text }) {
  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        name == "save-alt" && navigation.navigate("Saved");
        name == "user-circle" && navigation.navigate("EditProfile");
        name == "school" && navigation.navigate("Registered");
      }}
    >
      {name == "save-alt" && (
        <MaterialIcons
          name={name}
          size={24}
          color="black"
          style={styles.save}
        />
      )}
      {name == "user-circle" && (
        <FontAwesome
          name="user-circle"
          size={24}
          color="black"
          style={styles.save}
        />
      )}
      {name == "settings" && (
        <Ionicons name="settings" size={24} color="black" style={styles.save} />
      )}
      {name == "language" && (
        <FontAwesome
          name="language"
          size={24}
          color="black"
          style={styles.save}
        />
      )}
      {name == "school" && (
        <FontAwesome5
          name="school"
          size={24}
          color="black"
          style={styles.save}
        />
      )}
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btn: {
    borderBottomWidth: 1,
    flexDirection: "row",
    alignItems: "center",
    padding: "5%",
  },
  save: {
    marginRight: "2%",
  },
});
