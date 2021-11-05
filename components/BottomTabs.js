import React, { Component } from "react";
import { StyleSheet } from "react-native";
import FeedScreen from "../screens/Feed";
import StatsScreen from "../screens/Stats";
import SearchScreen from "../screens/Search";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer style={styles.btn}>
      <Tab.Navigator style={styles.btn}>
        <Tab.Screen name="Feed" component={FeedScreen} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
const styles = StyleSheet.create({
  btn:{
    backgroundColor: "red",
    flex:1,
  },
});

