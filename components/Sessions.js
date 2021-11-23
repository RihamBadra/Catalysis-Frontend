import React, { useState } from "react";
import {
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { Video } from "expo-av";
// import { Video } from "expo";
import Url from "./Url";

export default function Sessions({ info, ena }) {
  const { width } = useWindowDimensions();
  const [show, setShow] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView>
        {info &&
          info.map(() => (
            <View
              style={styles.vidCon}
              onTouchEnd={() => {
                if (!ena) setShow(!show);
              }}
            >
              <Video
                style={{ height: width / 4, width, borderWidth: 1 }}
                // ref={video}
                // style={styles.video}
                // source={{
                //   uri: Url + "videos/5YcCctaAhUpPBmUj9WmjwoVWlm2SiE8dCMjJatOw.mp4",
                //   headers: {
                //     Accept: "video/mp4",
                //   },
                // }}
                source={{
                  uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
                }}
                useNativeControls={ena}
                resizeMode="contain"
                isLooping={false}
                shouldPlay={false}
                playsInSilentLockedModeIOS={true}
                // onPlaybackStatusUpdate={(status) => setStatus(() => status)}
              />
            </View>
          ))}
      </ScrollView>
      {show && (
        <View style={[styles.pop, { width, height: width / 2 }]}>
          <Text style={styles.txt}>
            You have to register in order to be able to view lessons
          </Text>
          <TouchableOpacity style={styles.btn} onPress={() => setShow(false)}>
            <Text style={styles.txt}>Ok</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  vidCon: { marginBottom: "1%" },
  pop: {
    backgroundColor: "#002F67",
    justifyContent: "space-around",
    alignItems: "center",
  },
  txt: { fontSize: 18, color: "white", textAlign: "center" },
  btn: {
    backgroundColor: "#FBB040",
    width: "40%",
    height: "25%",
    borderRadius: 20,
    justifyContent: "center",
  },
});
