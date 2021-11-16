import * as React from "react";
import { Pressable, View, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Cat from "../components/Cat";
function Categories({navigation}) {
  return (
    <View style={{ flex: 1, paddingHorizontal: 10 }}>
      <View style={{ flex: 1, justifyContent: "flex-end" }}>
        <Text
          style={{
            fontWeight: "bold",
            paddingBottom: "8%",
            color: "#002F67",
            fontSize: 17,
            textAlign: "center",
          }}
        >
          Select three areas you are passionate about{" "}
        </Text>
        <Text
          style={{
            // fontWeight: "bold",
            paddingBottom: "5%",
            color: "#3B77AE",
            fontSize: 15,
            textAlign: "center",
          }}
        >
          We'll use them in order to build your home feed
        </Text>
      </View>
      <View
        style={{
          flex: 3,
          alignItems: "center",
          justifyContent: "center",
          paddingBottom: "10%",
        }}
      >
        <Cat navigation={navigation}/>
      </View>
    </View>
  );
}

export default Categories;
