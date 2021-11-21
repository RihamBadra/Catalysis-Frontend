import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  Animated,
  StyleSheet,
  useWindowDimensions,
  TouchableOpacity,
} from "react-native";
import Arrow from "../components/Arrow";
import Settings from "../components/Settings";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Url from "../components/Url";

export default function Profile({ navigation }) {
  const { width } = useWindowDimensions();
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [prof, setProf] = useState("");

  const data = [
    { key: 0, name: "user-circle", text: "Edit Profile" },
    { key: 1, name: "settings", text: "Settings" },
    { key: 2, name: "language", text: "Languages" },
    { key: 3, name: "save-alt", text: "Saved" },
    { key: 4, name: "school", text: "Registered Classes" },
  ];

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

  const handleBack = () => {
    navigation.navigate("Home");
  };

  useEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/checkToken", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    setProf(result.user.profile);
    setUserName(result.user.name);
    setUserEmail(result.user.email);
  }, []);

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.header,
          {
            height: width / 4,
          },
        ]}
      >
        <Arrow onPress={handleBack} color="#002F67" />
        <Text style={styles.headerTitle}>Profile</Text>
      </View>
      <View style={[styles.img, { marginTop: "5%" }]}>
        <Image
          style={[
            styles.pic,
            {
              width: width / 3,
              height: width / 3,
            },
          ]}
          source={
            prof ? { uri: Url + prof } : require("../assets/profile-icon-9.png")
          }
        />
        <View style={styles.desc}>
          <Text>{userName}</Text>
          <Text>{userEmail}</Text>
        </View>
      </View>
      <Animated.FlatList
        horizontal={false}
        showsHorizontalScrollIndicator={false}
        pagingEnabled
        bounces={false}
        data={data}
        renderItem={({ item }) => (
          <Settings navigation={navigation} name={item.name} text={item.text} />
        )}
      />
      <TouchableOpacity
        style={[styles.logout, { width: width - 100 }]}
        onPress={() => logout()}
      >
        <Text style={styles.logTxt}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fddeaf",
    justifyContent: "flex-end",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 20,
    marginBottom: "5%",
  },
  desc: { marginTop: "5%", alignItems: "center" },
  img: { alignItems: "center" },
  pic: { borderRadius: 200, borderColor: "#05336a", borderWidth: 2 },
  logout: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#05336a",
    borderRadius: 50,
    marginBottom: "7%",
    paddingVertical: "5%",
    alignSelf: "center",
  },
  logTxt: {
    color: "white",
    fontSize: 16,
  },
});
