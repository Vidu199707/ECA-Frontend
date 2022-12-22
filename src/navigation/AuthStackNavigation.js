import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "../screens/Login";
;

const Stack = createStackNavigator();
const LoginStack = createStackNavigator();

export default function AuthStackNavigator() {
  return (
    <Stack.Navigator
      //mode={"modal"}
      screenOptions={
        {
          headerShown: false,
        }
      }
      initialRouteName="Login"
    >
      <Stack.Screen name={"LoginStack"}>
        {() => (
          <LoginStack.Navigator
            //mode={"card"}
            screenOptions={
              {
                headerShown: false,
              }
            }
          >
            <LoginStack.Screen name={"Login"} component={Login} />
           
          </LoginStack.Navigator>
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
}
