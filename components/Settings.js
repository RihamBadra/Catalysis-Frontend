import React from "react";
import {
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import {
  FontAwesome,
  MaterialIcons,
  Ionicons,
  AntDesign,
} from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Url from "./Url";

export default function Settings({ navigation, name, text }) {
  const logout = async () => {
    let token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/logout", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    await AsyncStorage.setItem("token", "");
    await AsyncStorage.setItem("user", "");
    navigation.navigate("Login");
  };

  return (
    <TouchableOpacity
      style={styles.btn}
      onPress={() => {
        name == "logout" && logout();
        name == "save-alt" && navigation.navigate("Saved");
        name == "user-circle" && navigation.navigate("EditProfile");
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
      {name == "logout" && (
        <AntDesign name="logout" size={24} color="black" style={styles.save} />
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
