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
import Profile from "../screens/Profile";
import EditProfile from "../screens/EditProfile";
import Categories from "../screens/Categories";
import Welcome from "../screens/Welcome";
import Loading from "../screens/loading";
import Loading2 from "../screens/Loading2";
import Cat from "../components/Cat";

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
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Loading" component={Loading} />
        <Stack.Screen name="Loading2" component={Loading2} />
        <Stack.Screen name="Categories" component={Categories} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Home" component={Feed} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="EditProfile" component={EditProfile}/>

        {/* <NavigationContainer>
        <Tab.Navigator >
        <Tab.Screen name="Feed" component={Feed} />
        <Tab.Screen name="Search" component={SearchScreen} />
        <Tab.Screen name="Stats" component={StatsScreen} />
      </Tab.Navigator>
      </NavigationContainer> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
