import React, { useEffect, useRef } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Login from "../screens/Login";
import Carousel from "../screens/Carousel";
import Register from "../screens/Register";
// import Feed from "../screens/Feed";
import Feed from "../components/BottomTabs";
import StatsScreen from "../screens/Stats";
import SearchScreen from "../screens/Search";
import Course from "../screens/Course";

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

export default function HomeStack({ initialRoute = "Carousel" }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false, gestureEnabled: false }}
      >
        <Stack.Screen name="Carousel" component={Carousel} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Course" component={Course} />
        <Stack.Screen name="Home" component={Feed} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
