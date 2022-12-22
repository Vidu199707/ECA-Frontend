// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';
// import BottomTab from './src/navigation/BottomTab';
// import Cart_Screen from './src/screens/Cart_Screen';


// import Home from './src/screens/Home';
// import Login from './src/screens/Login';
// import Payment_Screen from './src/screens/Payment_Screen';

// import Product_Screen from './src/screens/Product_Screen';
// import Test from './src/screens/Test';


// export default function App() {
//   return (
//   <Login/>
//   )
// }


import axios from "axios";
import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import MainStackNavigator from "./src/navigation/MainStatckNavigation";
import AuthStackNavigator from "./src/navigation/AuthStackNavigation";
import { AuthContext } from './src/consts/context';
// import color from "./src/consts/colors";
// import AnimatedSplash from "react-native-animated-splash-screen";
// import Toast from "react-native-toast-message";
// import { LogBox } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
axios.defaults.headers.post["Content-Type"] = "application/json";
//axios.defaults.baseURL = "https://esystems.cdl.lk/QRApp_BackEnd/api/attendance/";
// import Loader from './src/component/Loader';
// import TestingPage from './src/component/renderMenu';

// LogBox.ignoreLogs(["EventEmitter.removeListener"]);
// LogBox.ignoreAllLogs(true);
export default function App() {

  const initialLoginState = {
    isShowing: false,
    userToken: null,
    serviceNumber: null,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case "RETRIVE_TOKEN":
        return {
          ...prevState,
          userToken: action.token,
          isShowing: true,
        };
      case "LOGIN":
        return {
          ...prevState,
          serviceNumber: action.id,
          userToken: action.token,
          isShowing: true,
        };
      case "LOGOUT":
        return {
          ...prevState,
          serviceNumber: null,
          userToken: null,
          isShowing: false,
        };
      case "REGISTER":
        return {
          ...prevState,
          serviceNumber: action.id,
          userToken: action.token,
          isShowing: true,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(
    loginReducer,
    initialLoginState
  );

  const authContext = React.useMemo(
    () => ({
      signIn: async (username, password) => {
        let userToken;
        userToken = "00000";
        try {
          dispatch({
            type: "LOGIN",
            id: "0000",
            token: userToken + "",
          });
          AsyncStorage.setItem("userToken", userToken);
        } catch (e) {
          console.log(e);
        }
      },
      signOut: async () => {
        try {
          await AsyncStorage.removeItem("userToken");
          await AsyncStorage.removeItem("username");
          AsyncStorage.clear();
        } catch (e) {
          console.log(e);
        }
        dispatch({ type: "LOGOUT" });
      },
    }),
    []
  );

  return (
   <AuthContext.Provider value={authContext}>
      {/* <StatusBar backgroundColor={color.white} barStyle="dark-content" /> */}

      {/* <AnimatedSplash
        //translucent={true}
        logoWidht={150}
        logoHeight={150}
        isLoaded={loginState.isShowing}
        backgroundColor={color.white}
        logoImage={require("./src/asset/logo.png")}
      > */}
        <NavigationContainer>
          {loginState.userToken != null ? (
            <MainStackNavigator />
          ) : (
            <AuthStackNavigator />
          )}
  {/* <AuthStackNavigator /> */}
{/* <MainStackNavigator /> */}

{/* <Loader/> */}



          {/* <Toast innerRef={(ref) => Toast.setRef(ref)} /> */}
        </NavigationContainer>
      {/* </AnimatedSplash> */}
    </AuthContext.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


