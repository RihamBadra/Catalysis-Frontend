// import React, {useState} from 'react'
// import { Component } from 'react'
// import {
//     SafeAreaView, StyleSheet, View, Text, TouchableOpacity} from 'react-native'

//     export default function Cat() {
//         return (
//             // <View style={styles.container}>
//             <View style={styles.container}>
//             <View style={styles.container1}>
//                 <View style={styles.CircleShape}>
//             </View>
//             </View>
//             <View style={styles.textContainer}>
//                 <Text style={styles.text}>Hapiness</Text>
//             </View>
//             </View>

//             // {/* </View> */}
//         );
//       }
//       const styles = StyleSheet.create({
//           container: {
// flex:  1,
//           },
//           container1: {
//               flex: 1,
//               justifyContent: "flex-end",
//               alignItems:"center",

//             //   backgroundColor:"#FF9880",
//           },

//           textContainer:{
//               flex: 1,
//               alignItems: "center"
//           },
//         CircleShape:{
//             width: 70,
//             height: 70,
//             borderRadius:150/2,
//             backgroundColor: '#7b97a2',
//         },
//         text:{

//         },

//       });

import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
  Pressable,
  useWindowDimensions,
} from "react-native";
//import Loading from "../screens";

const CircleButton = (props) => (
  <>
    <TouchableOpacity
      style={{
        margin: props.margin,
        height: props.size,
        width: props.size,
        backgroundColor: props.color,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: props.size * 2,
      }}
      onPress={props.onPress}
    />
    <Text
      style={{
        color: "#3d3d3d",
        textAlign: "center",
        fontSize: props.fontSize,
      }}
    >
      {props.text}
    </Text>
  </>
);

export default function Cat({ navigation }) {
  const [perc, setPerc] = useState([]);
  const [stat, setStat] = useState("Choose 3 areas");
  useEffect(() => {
    if (perc.length == 0) setStat("Choose 3 areas");
    if (perc.length == 1) setStat("Choose 2 more areas");
    if (perc.length == 2) setStat("Choose 1 more area");
    if (perc.length == 3) setStat("Continue");
  }, [perc]);
  const handlePec = (value) => {
    const cond = perc.length < 3;
    if (cond) {
      console.log("entered");
      let ind = perc.indexOf(value);
      if (ind == -1) setPerc((prev) => [...prev, value]);
      else {
        setPerc((prev) => [
          ...prev.slice(0, ind),
          ...prev.slice(ind + 1, prev.length),
        ]);
      }
    } else {
      let ind = perc.indexOf(value);
      if (ind != -1) {
        setPerc((prev) => [
          ...prev.slice(0, ind),
          ...prev.slice(ind + 1, prev.length),
        ]);
      }
    }
  };
  state = {
    isLoading: false,
  };

  doSignup = async () => {
    this.setState({ isLoading: true });
    await asyncSignupFunction();
    this.setState({ isLoading: false });
  };
  const { width, height } = useWindowDimensions();

  console.log("height", height);

  const SIZE = height - height * 0.8605;

  return (
    <>
      {/* {<Loading />} {console.log(perc)} */}
      <ScrollView
        showsHorizontalScrollIndicator={false}
        style={[
          styles.container,
          { width: width, maxHeight: height - height * 0.5 },
        ]}
        horizontal={true}
      >
        <View
          style={{
            padding: 10,
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View style={{ justifyContent: "flex-end", marginBottom: "3%" }}>
            <CircleButton
              key={2}
              text="Happiness"
              size={SIZE}
              color={
                perc.indexOf("Btn-1") >= 0 ? "#002F67" : "#7b97a2"
                // perc.filter((res) => res === "Btn-1").length === 1
                //   ? "#002F67"
                //   : "#7b97a2"
              }
              textColor="white"
              fontSize={20}
              // margin={10}
              // arr={arr}
              value="batata"
              onPress={
                () => {
                  handlePec("Btn-1");
                }

                // if (!pressed.includes(arr[0])) setPressed([...pressed, arr[0]]);
              }
            />
          </View>
          <View style={{ marginTop: "3%" }}>
            <CircleButton
              key={3}
              text="Meditation"
              size={SIZE}
              color={
                perc.filter((res) => res === "Btn-2").length === 1
                  ? "#002F67"
                  : "#7b97a2"
              }
              textColor="white"
              // margin={10}
              fontSize={20}
              onPress={
                () => {
                  handlePec("Btn-2");
                }
                // if (!pressed.includes(arr[1])) setPressed([...pressed, arr[1]]);
              }
              // showMessage(e);
            />
          </View>
          {/* </View>
      <View style={{ flex: 1, flexDirection: "row" }}> */}
          <View style={{ justifyContent: "flex-end", marginBottom: "15%" }}>
            <CircleButton
              text="Spirituality"
              size={SIZE}
              color={
                perc.filter((res) => res === "Btn-3").length === 1
                  ? "#002F67"
                  : "#7b97a2"
              }
              textColor="white"
              // margin={10}
              fontSize={20}
              onPress={
                () => {
                  handlePec("Btn-3");
                }
                // if (!pressed.includes(arr[2])) setPressed([...pressed, arr[2]]);
              }
            />
          </View>
          <View style={{ justifyContent: "flex-start", marginBottom: "15%" }}>
            <CircleButton
              text="Fitness"
              size={SIZE}
              color={
                perc.filter((res) => res === "Btn-4").length === 1
                  ? "#002F67"
                  : "#7b97a2"
              }
              textColor="white"
              // margin={10}
              fontSize={20}
              onPress={
                () => {
                  handlePec("Btn-4");
                }
                // if (!pressed.includes(arr[3])) setPressed([...pressed, arr[3]]);
              }
            />
          </View>
          <View style={{ justifyContent: "flex-end", marginBottom: "10%" }}>
            <CircleButton
              text="Love"
              size={SIZE}
              color={
                perc.filter((res) => res === "Btn-5").length === 1
                  ? "#002F67"
                  : "#7b97a2"
              }
              textColor="white"
              // margin={10}
              fontSize={20}
              onPress={
                () => {
                  handlePec("Btn-5");
                }

                // if (!pressed.includes(arr[4])) setPressed([...pressed, arr[4]]);
              }
            />
          </View>
        </View>
      </ScrollView>
      <View
        style={{
          overflow: "hidden",
          // position: "relative",
          height: 40,
          width: width * 0.8,
          backgroundColor: "#fddeaf",
          borderRadius: 20,
        }}
      >
        <View
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: "center",
            alignItems: "center",
            zIndex: 2,
          }}
          onTouchStart={() => {
            if (perc.length == 3) {
              navigation.navigate("Loading");
            }
          }}
        >
          <Text style={{ color: "white" }}>{stat}</Text>
        </View>

        <View
          style={{
            height: 40,
            width: `${33.34 * perc.length}%`,
            backgroundColor: "#002F67",
            borderRadius: 20,
          }}
        ></View>
      </View>
      {/* <View>
        {pressed.length > 0 &&
          pressed.map((press, key) => <Text key={key}>{press}</Text>)}
      </View> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
