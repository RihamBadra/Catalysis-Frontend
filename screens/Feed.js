import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  ScrollView,
  Image,
  StyleSheet,
  useWindowDimensions,
} from "react-native";
import {
  AntDesign,
  FontAwesome5,
  FontAwesome,
  MaterialIcons,
  MaterialCommunityIcons,
  Ionicons,
} from "@expo/vector-icons";
import Swiper from "react-native-swiper";
import Popup from "../components/Popup";
import { useFocusEffect } from "@react-navigation/native";
import { BackHandler } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Url from "../components/Url";

export default function Feed() {
  const [card, setCard] = useState([]);
  const [pop, setPop] = useState(false);
  const [scroll, setScroll] = useState(true);
  const [hide, setHide] = useState([]);
  const [saved, setSaved] = useState([]);
  const [found, setFound] = useState(false);
  const [sav, setSav] = useState([]);
  const [item, setItem] = useState(0);
  const { width } = useWindowDimensions();
  const [msg, setMsg] = useState("");

  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        return true;
      };

      BackHandler.addEventListener("hardwareBackPress", onBackPress);

      return () =>
        BackHandler.removeEventListener("hardwareBackPress", onBackPress);
    }, [])
  );

  const time = () => {
    setTimeout(() => {
      setMsg("");
    }, 1500);
  };

  const hideClass = async (id) => {
    const formData = new FormData();
    const token = await AsyncStorage.getItem("token");
    formData.append("card_id", id);
    const res = await fetch(Url + "api/hidden", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const result = await res.json();
    setHide(result);
    setMsg(result.message);
  };

  const saveClass = async (id) => {
    const formData = new FormData();
    const token = await AsyncStorage.getItem("token");
    formData.append("card_id", id);
    const res = await fetch(Url + "api/saved", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    const result = await res.json();
    setSav(result);
    setMsg(result.message);
  };

  useEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/class", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();
    setCard(result.class);
    setSaved(result.saved);
  }, [hide, sav]);

  useEffect(() => {
    setScroll(!pop);
  }, [pop]);

  return (
    <View
      style={[styles.container, { width }]}
      onTouchEndCapture={() => {
        if (pop == true) setPop(false);
      }}
    >
      <View
        style={[
          styles.header,
          {
            width,
            height: width / 4,
          },
        ]}
      >
        <Ionicons
          name="notifications"
          size={24}
          color="black"
          style={styles.notifications}
        />
        <FontAwesome
          name="user-circle"
          size={24}
          color="black"
          style={styles.profile}
        />
      </View>
      <ScrollView scrollEnabled={scroll} style={styles.scroll}>
        {card &&
          card.map((ins, key) => (
            <View key={key} style={styles.innerView}>
              <View style={styles.setTitle}>
                <Text style={styles.title}>{ins.title}</Text>
                <MaterialCommunityIcons
                  name="settings-helper"
                  size={45}
                  color="black"
                  style={styles.settings}
                  onPress={() => {
                    setPop(!pop);
                    setItem(ins.id);
                    saved.forEach((sv) => {
                      if (ins.id == sv) {
                        setFound(true);
                      } else setFound(false);
                    });
                  }}
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
                      <Image
                        key={key}
                        style={{ width, height: width }}
                        source={{
                          uri: Url + img.name,
                        }}
                      />
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
                    <MaterialIcons
                      key={key}
                      name="star-rate"
                      size={17}
                      color="gold"
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

      {pop && (
        <Popup
          setPop={setPop}
          hideClass={hideClass}
          saveClass={saveClass}
          item={item}
          found={found}
        />
      )}

      {msg != "" ? time() : null}
      {msg != "" && (
        <View style={[styles.msgBox, { height: width / 5 }]}>
          <Text style={styles.msg}>{msg}</Text>
        </View>
      )}

      <View style={{ width, height: width / 5 }}></View>
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
  notifications: { position: "absolute", bottom: "20%", right: "25%" },
  profile: { position: "absolute", bottom: "20%", right: "10%" },
  scroll: { backgroundColor: "white" },
  innerView: { marginBottom: "5%" },
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
  buttonText: { fontSize: 50 },
  msgBox: {
    backgroundColor: "#002f67",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 3,
  },
  msg: {
    fontSize: 18,
    color: "white",
  },
});
