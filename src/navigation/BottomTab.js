import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { MaterialCommunityIcons, AntDesign,Ionicons } from '@expo/vector-icons';
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Cart_Screen from '../screens/Cart_Screen';
import Payment_Screen from '../screens/Payment_Screen';
import Product_Screen from '../screens/Product_Screen';

import NumericInput from 'react-native-numeric-input'
import AuthStackNavigator from './AuthStackNavigation';
import Scanner from '../component/Scanner';
import Qrwindow from '../component/Qrwindow';
import Chat_Screen from '../screens/Chat_Screen';

import SearchScreen from '../screens/SearchScreen';








function Notifications() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Notifications!</Text>
      <Text>Notifications!</Text>
      <Text>Notifications!</Text>
      <NumericInput 
           
            // onChange={value => this.setState({value})} 
            onLimitReached={(isMax,msg) => console.log(isMax,msg)}
            totalWidth={240} 
            totalHeight={50} 
            iconSize={25}
            step={1}
            valueType='real'
            rounded 
            textColor='#B0228C' 
            iconStyle={{ color: 'white' }} 
            rightButtonBackgroundColor='#EA3788' 
            leftButtonBackgroundColor='#E56B70'/>
    </View>
  );
}

const Tab = createBottomTabNavigator();


function MyTabs() {
  return (
 
    <Tab.Navigator
      initialRouteName="Home1"
      
      screenOptions={{
        tabBarStyle:{
          backgroundColor:'#F7EFED',
          borderTopWidth: 0,
          position: 'absolute',
          elevation: 5
          
            
        },
       headerShown:false,
        tabBarActiveTintColor: '#e91e63',
        
        
      }}
    >

  
  <Tab.Screen
        name="Home1"
        component={Home}
        options={{
            headerShown:false,
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />


<Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          headerShown:false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }}
      />

       
<Tab.Screen
        name="qr"
        component={Qrwindow}

        options={() =>({
          headerShown:false,
          tabBarLabel: 'QR Scanner',
          // tabBarStyle:{
          //   display:'none'
          // },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="qr-code-sharp" color={color} size={size} />
          ),
        })}
      />
<Tab.Screen
        name="Chat"
        component={Chat_Screen}
        
        options={() =>({
          headerShown:false,
          tabBarLabel: 'Chat',
          // tabBarStyle:{
          //   display:'none'
          // },
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses-outline" color={color} size={size} />
          ),
        })}
      />
      
    </Tab.Navigator>




  );
}



export default function BottomTab() {
  const Stack = createNativeStackNavigator()
  return (
    
     
      <Stack.Navigator  screenOptions={{headerShown:false}}>

      <Stack.Screen name='MyTabs' component={MyTabs}/>
      <Stack.Screen name='Cart' component={Cart_Screen}/>
      <Stack.Screen name='Home1' component={Home}/>
      <Stack.Screen name='Payment_Screen' component={Payment_Screen}/>
      <Stack.Screen name='Product_Screen' component={Product_Screen}/>
      <Stack.Screen name='Qrwindow' component={Qrwindow}/>
      <Stack.Screen name='Scanner' component={Scanner}/>
      
      <Stack.Screen name='Search' component={SearchScreen}/>

      
     </Stack.Navigator>
   
  );
}
