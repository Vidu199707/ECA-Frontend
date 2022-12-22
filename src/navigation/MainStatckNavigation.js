import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
const Stack = createStackNavigator();

import BottomTab from "./BottomTab";


export default function MainStatckNavigation() {
  return (
    <Stack.Navigator
      //mode={"modal"}
      screenOptions={
        {
          headerShown: false,
        }
      }
      initialRouteName="Home"
    >
      <Stack.Screen name="Home" component={BottomTab} />

    </Stack.Navigator>
  );
}