import React from "react";

import { AuthContext } from "../consts/context";

import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  SafeAreaView,
} from "react-native";
import axios from "axios";

import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import { useState } from "react";

const alert1 = () =>
  Alert.alert("Error ", "Pending process, please wait", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

const alert2 = () =>
  Alert.alert("Login ", "Error Login", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);

const Login = () => {
  const [username, setUserName] = useState("");

  // const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const { signIn } = React.useContext(AuthContext);

  const validator = () => {
    signIn();
  };

  const [show, setShow] = React.useState(false);
  const [visible, setVisible] = React.useState(false);

  // const handleLogin = () => {
  //   const data = {
  //     username: username,
  //     password: password,
  //   };

  //   const url = "http://localhost:8438/api/login/Login";
  //   axios
  //     .post(url, data)
  //     .then((result) => {
  //       // alert(result.data);
  //       // console.log(result.data.username);

  //       if (result.data == "User is valid") {
  //         alert("Successfully login");
  //         validator();
  //       } else {
  //         alert("username or password incorrect");
  //       }
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });

  //   // let formData = {};
  //   // formData.username = "vidusha";
  //   // formData.password = "12345";
  //   //alert(formData);

  //   // axios({
  //   //   url: "http://192.168.49.60:11058/api/login/Login",
  //   //   method: "POST",
  //   //   data: formData
  //   // })
  //   //   .then((res) => {
  //   //     alert(res.data);
  //   //   })
  //   //   .catch((err) => {
  //   //     console.log(err);
  //   //   });

  //   // axios.post("http://192.168.49.60:11058/api/login/Login/", {
  //   //     username: "vidusha",
  //   //     password: "12345",

  //   //   })
  //   //   .then((response) => {
  //   //     //console.log(response.data.token);
  //   //     return response.data.token;
  //   //   })
  //   //   .catch((error) => {
  //   //     console.log(error);

  //   // console.log(formData);
  //   //     axios({
  //   //       url: "http://192.168.6.60/api/login/Login",
  //   //       method: "POST",
  //   //       data: formData,
  //   //     }).then(response => {validator({email,password})})
  //   //   .catch(error => {
  //   //     alert(error);
  //   //   });

  //   // axios({
  //   //   method: 'get',
  //   //   url: `https://jsonplaceholder.typicode.com/todos/1`,
  //   // }).then((response) => {
  //   //   console.log(response.data);
  //   // });
  // };

  return (
    <SafeAreaView style={{ flex: 1, justifyContent: "center" }}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image
            source={require("../asset/profile.png")}
            style={{ height: 80, width: 80, resizeMode: "stretch" }}
          />
        </View>
        <Text style={styles.logintxt}> Login </Text>

        <Text style={styles.label}>Email Address</Text>
        <View style={styles.input}>
          <TextInput
            placeholder="Enter your email"
            maxLength={40}
            onChangeText={setUserName}
            value={username}
            placeholderTextColor="#666666"
            autoCapitalize="none"
            width={"100%"}
          />
        </View>
        <Text style={styles.label}>Password</Text>
        <View style={styles.input}>
          <TextInput
            secureTextEntry={!visible}
            placeholder="Your Password"
            maxLength={30}
            onChangeText={setPassword}
            value={password}
            placeholderTextColor="#666666"
            autoCapitalize="none"
            width={"100%"}
          />

          <TouchableOpacity
            style={styles.passBtn}
            onPress={() => {
              setVisible(!visible);
              setShow(!show);
            }}
          >
            <MaterialCommunityIcons
              name={show === false ? "eye-off-outline" : "eye-outline"}
              size={26}
              color={"gray"}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={alert1}>
          <Text style={styles.frogot}>Forgot password?</Text>
        </TouchableOpacity>

        <View style={styles.button}>
          <TouchableOpacity onPress={validator}>
            {/* <TouchableOpacity onPress={signIn} > */}

            <Text
              style={{
                fontWeight: "800",
                color: "white",
                paddingHorizontal: 140,
              }}
            >
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
  },
  logintxt: {
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 30,

    alignSelf: "center",
  },

  logo: {
    alignSelf: "center",
    marginBottom: 10,
    left: 5,
  },

  label: {
    flexDirection: "row",
    marginTop: 20,
    paddingBottom: 5,
    left: 20,
    fontWeight: "bold",
  },

  input: {
    flexDirection: "row",
    marginTop: 5,
    borderBottomWidth: 1,
    padding: 5,
    width: "90%",
    left: 20,
    fontWeight: "bold",
  },

  button: {
    alignItems: "center",

    marginBottom: 30,
    padding: 10,
    backgroundColor: "#FF3A00",

    borderRadius: 10,
    alignSelf: "center",
  },

  frogot: {
    alignItems: "center",
    color: "red",
    alignSelf: "center",
    marginVertical: 30,
  },

  signup: {
    alignItems: "center",
    color: "blue",
    alignSelf: "center",
  },
  passBtn: {
    position: "absolute",
    right: 15,
    top: 5,
  },
});

export default Login;

//onPress={() =>validator({email,password})}
