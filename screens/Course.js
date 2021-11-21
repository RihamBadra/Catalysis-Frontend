import React, { useEffect, useState } from "react";
import {
  View,
  useWindowDimensions,
  StyleSheet,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import Arrow from "../components/Arrow";
import Swiper from "react-native-swiper";
import Url from "../components/Url";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
import { Video } from "expo-av";
import { setStatusBarBackgroundColor } from "expo-status-bar";
import Overview from "../components/Overview";
import Community from "../components/Community";
import AddReview from "../components/AddReview";
// import { Video } from "expo";

export default function Course({ navigation, route }) {
  const [add, setAdd] = useState(false);
  const [info, setInfo] = useState(route.params.info);
  const { width, height } = useWindowDimensions();
  const [ena, setEna] = useState(false);
  const [index, setIndex] = useState(0);
  const [users, setUsers] = useState([]);
  const [edit, setEdit] = useState(0);
  const [btn, setBtn] = useState(0);

  const [routes] = useState([
    { key: "first", title: "Overview" },
    { key: "second", title: "Sessions" },
    { key: "third", title: "Community" },
  ]);

  const handleBack = () => {
    navigation.goBack();
  };

  useEffect(async () => {
    const token = await AsyncStorage.getItem("token");
    const res = await fetch(Url + "api/class", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const result = await res.json();

    const index = result.class
      .map((e) => {
        return e.id;
      })
      .indexOf(info.id);
    setInfo(result.class[index]);
  }, [edit]);

  useEffect(async () => {
    const connectedUser = await AsyncStorage.getItem("user");
    const index = users
      .map((e) => {
        return e.user_id;
      })
      .indexOf(Number(connectedUser));
    if (index >= 0) {
      setEna(true);
    }
  }, [users]);

  useEffect(async () => {
    setInfo(route.params.info);
    setUsers(info.enrolled_users);
  }, []);

  useEffect(async () => {
    const connectedUser = await AsyncStorage.getItem("user");
    const index = info.ratings
      .map((e) => {
        return e.user_id;
      })
      .indexOf(Number(connectedUser));
    setBtn(index);
  }, [info]);

  const register = async () => {
    const formData = new FormData();
    const token = await AsyncStorage.getItem("token");
    formData.append("card_id", info.id);
    const res = await fetch(Url + "api/userClass", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    });
    setEna(true);
  };

  const FirstRoute = () => <Overview info={info} />;

  const SecondRoute = () => (
    <ScrollView style={{ flex: 1 }}>
      {/* <View style={{ flex: 1, height: height / 3 }}> */}

      <Video
        style={{ height: height / 3, width }}
        // ref={video}
        // style={styles.video}
        source={{
          uri: Url + "videos/5YcCctaAhUpPBmUj9WmjwoVWlm2SiE8dCMjJatOw.mp4",
          headers: {
            Accept: "video/mp4",
          },
        }}
        // source={{
        //   uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        // }}
        useNativeControls
        resizeMode="contain"
        isLooping
        shouldPlay
        playsInSilentLockedModeIOS={true}
        // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
      {/* </View> */}
      {/* <View style={{ flex: 1 }}></View> */}
    </ScrollView>
  );

  const ThirdRoute = () => (
    <Community
      ratings={info.ratings}
      reviews={info.reviews}
      ena={ena}
      setAdd={setAdd}
      btn={btn}
    />
  );

  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute,
  });
  // style={pop ? styles.disabled : styles.container}>
  return (
    <View style={styles.container}>
      <Arrow onPress={handleBack} color="#002F67" />
      <View style={{ height: height / 3 }}>
        <Swiper loop={false} bounces={true} activeDotColor="white">
          {info.posts &&
            info.posts.map((img, key) => (
              <Image
                key={key}
                style={{ height: height / 3 }}
                source={{
                  uri: Url + img.name,
                }}
              />
            ))}
        </Swiper>
      </View>
      <View>
        <Text style={styles.title}>{info.title}</Text>
      </View>
      <View>
        <Text style={styles.owner}>{info.owner.name}</Text>
      </View>
      <TouchableOpacity
        onPress={() => register()}
        disabled={ena}
        style={[
          styles.button,
          { width: width - 50, backgroundColor: ena ? "#6b7785" : "#002F67" },
        ]}
      >
        <Text style={styles.btnText}>Register for free</Text>
      </TouchableOpacity>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width }}
        renderTabBar={(props) => (
          <TabBar
            indicatorStyle={{ backgroundColor: "#002F67", height: 5 }}
            {...props}
            renderLabel={({ route }) => (
              <Text style={styles.tabText}>{route.title}</Text>
            )}
            style={styles.tabBack}
          />
        )}
      />
      {add && <AddReview setAdd={setAdd} id={info.id} setEdit={setEdit} />}
    </View>
  );
}

const styles = StyleSheet.create({
  disabled: {
    flex: 1,
    backgroundColor: "gray",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: { textAlign: "center", color: "#002F67", fontSize: 20 },
  owner: { textAlign: "center", color: "#6E6B6B", fontSize: 15 },
  button: {
    padding: 20,
    borderRadius: 40,
    alignSelf: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  btnText: {
    color: "white",
    textAlign: "center",
  },
  tabText: { color: "#002F67", fontSize: 18, fontWeight: "bold" },
  tabBack: { backgroundColor: "white" },
  overview: { flex: 1, paddingHorizontal: 20, paddingTop: 20 },
});
