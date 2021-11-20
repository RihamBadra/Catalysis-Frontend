import React from "react";
import FeedScreen from "../screens/Feed";
import StatsScreen from "../screens/Stats";
import SearchScreen from "../screens/Search";
import { Platform, Text, View } from "react-native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarLabel: null,
      }}
      barStyle={{
        backgroundColor: "#fddeaf",
        paddingBottom: Platform.OS == "android" ? 48 : 0,
      }}
      activeColor="#1e1568"
    >
      <Tab.Screen
        name="Feed"
        component={FeedScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Text></Text>
              <MaterialCommunityIcons name="home" color={color} size={26} />
            </View>
          ),
        }}
        //  options={{ tabBarBadge: 3 }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Text></Text>
              <Ionicons name="search" size={26} color={color} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Stats"
        component={StatsScreen}
        options={{
          tabBarIcon: ({ color }) => (
            <View>
              <Text></Text>
              <Ionicons name="stats-chart" size={26} color={color} />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
