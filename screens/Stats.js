import React, { useEffect, useState } from "react";
import Swiper from "react-native-swiper";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  useWindowDimensions,
} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import Url from "../components/Url";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Stats({ navigation }) {
  const [myClasses, setMyClasses] = useState([]);
  const { width, height } = useWindowDimensions();

  useEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/OwnerClass", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    setMyClasses(data.class);
  }, []);

  return (
    <View
      style={[styles.container, { width }]}
      // onTouchEndCapture={() => {
      //   if (pop == true) setPop(false);
      // }}
    >
      <View
        style={[
          styles.header,
          {
            width,
            height: width / 4,
          },
        ]}
      />
      {/* <ScrollView scrollEnabled={scroll} style={styles.scroll}> */}
      {myClasses.length == 0 ? (
        <View style={[styles.noClass, { height: height - width / 3 }]}>
          <Text>No classes to show</Text>
        </View>
      ) : (
        <ScrollView style={styles.scroll}>
          {myClasses &&
            myClasses.map((ins, key) => (
              <View key={key} style={styles.innerView}>
                <View style={styles.setTitle}>
                  <Text style={styles.title}>{ins.title}</Text>
                  <MaterialCommunityIcons
                    name="settings-helper"
                    size={45}
                    color="black"
                    style={styles.settings}
                    // onPress={() => {
                    //   setPop(!pop);
                    //   setItem(ins.id);
                    //   saved.forEach((sv) => {
                    //     if (ins.id == sv) {
                    //       setFound(true);
                    //     } else setFound(false);
                    //   });
                    // }}
                  />
                </View>
                <View
                  style={[
                    styles.flatList,
                    {
                      width,
                      height: width,
                    },
                  ]}
                >
                  <Swiper
                    loop={false}
                    bounces={true}
                    showsButtons={ins.posts.length > 0 ? true : false}
                    showsPagination={false}
                    nextButton={<Text style={styles.buttonText}>›</Text>}
                    prevButton={<Text style={styles.buttonText}>‹</Text>}
                  >
                    {ins.posts &&
                      ins.posts.map((img, key) => (
                        <TouchableOpacity
                          activeOpacity={1}
                          key={key}
                          onPress={() => {
                            navigation.navigate("Course", {
                              info: ins,
                            });
                          }}
                        >
                          <Image
                            style={{ width, height: width }}
                            source={{
                              uri: Url + img.name,
                            }}
                          />
                        </TouchableOpacity>
                      ))}
                  </Swiper>
                </View>
                <View style={styles.bottomView}>
                  <Text style={styles.desc}>{ins.description}</Text>
                  <View style={styles.descBox}>
                    <AntDesign
                      name="user"
                      size={15}
                      color="black"
                      style={styles.symbols}
                    />
                    <Text style={styles.owner}>{ins.owner.name}</Text>
                  </View>
                  <View style={styles.descBox}>
                    <FontAwesome5
                      name="users"
                      size={10}
                      color="black"
                      style={styles.symbols}
                    />
                    <Text style={styles.enrolled}>{ins.enrolled} enrolled</Text>
                  </View>
                  <View style={styles.rating}>
                    {[...Array(ins.rating)].map((s, key) => (
                      <Ionicons
                        key={key}
                        name="star"
                        size={15}
                        color="gold"
                        style={styles.empty}
                      />
                    ))}
                    {[...Array(5 - ins.rating)].map((s, key) => (
                      <Ionicons
                        key={key}
                        name="star-outline"
                        size={15}
                        color="gold"
                        style={styles.empty}
                      />
                    ))}
                  </View>
                </View>
              </View>
            ))}
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: "#fddeaf",
    position: "relative",
  },
  scroll: { backgroundColor: "white" },
  innerView: { marginBottom: "5%" },
  noClass: { alignItems: "center", justifyContent: "center" },
  setTitle: { padding: "2%", position: "relative" },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    textAlign: "center",
    color: "#002F67",
  },
  settings: {
    position: "absolute",
    bottom: "60%",
    right: 0,
    justifyContent: "center",
  },
  flatList: {
    position: "relative",
  },
  arrowRight: { position: "absolute", top: "50%", right: 0 },
  arrowLeft: { position: "absolute", top: "50%", left: 0 },
  bottomView: { position: "relative", padding: 15 },
  desc: { fontSize: 17, fontWeight: "bold" },
  descBox: { flexDirection: "row" },
  symbols: { marginRight: "1%" },
  owner: { fontSize: 15 },
  enrolled: { fontSize: 10 },
  rating: {
    position: "absolute",
    bottom: 15,
    right: 15,
    flexDirection: "row",
  },
  empty: { paddingHorizontal: 1 },
  buttonText: { fontSize: 50, color: "#002f67" },
});
