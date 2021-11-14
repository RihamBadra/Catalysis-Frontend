import React from "react";
import FeedScreen from "../screens/Feed";
import StatsScreen from "../screens/Stats";
import SearchScreen from "../screens/Search";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { View } from "react-native";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      barStyle={{ backgroundColor: "#fddeaf" }}
      // activeColor="#00aea2"
      // inactiveColor="#95a5a6"
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        //  options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen name="Search" component={SearchScreen} />
      <Tab.Screen name="Stats" component={StatsScreen} />
    </Tab.Navigator>
  );
}
