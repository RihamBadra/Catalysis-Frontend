import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Login from "../screens/Login";
import Carousel from "../screens/Carousel";
import Register from "../screens/Register";
import Feed from "../screens/Feed";

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
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Feed} />
        </Stack.Navigator>
    </NavigationContainer>
  );
}
