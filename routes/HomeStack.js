import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Carousel from "../screens/Carousel";
import { StyleSheet } from "react-native";

const Stack = createStackNavigator();

export default function HomeStack({ initialRoute = "Carousel" }) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={initialRoute}
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="Carousel" component={Carousel} />
        <Stack.Screen name="Login" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
  },
});
