import { View, Text, StyleSheet,StatusBar, TouchableOpacity} from 'react-native'
import React from 'react'
import { MaterialIcons } from '@expo/vector-icons';
import { Image } from 'react-native';
import { Card } from 'react-native-shadow-cards';
import styles from '../consts/ProfileStyles';
import { Entypo,Feather } from '@expo/vector-icons';

 function Profile  ({navigation}) {
  

    return(


        
    <View style={styles.container}>
        <StatusBar  />

        <View style={styles.menu_icon}>

      <TouchableOpacity>
              <Entypo name="menu" size={28} color="black" /> 
      </TouchableOpacity>

      <TouchableOpacity >
              <Feather name="shopping-cart" size={28} color="black" onPress={() => navigation.navigate("Cart")}/>
      </TouchableOpacity>

      </View>
      
     

     <View style = {styles.logo}>
        <Image source={require('../asset/profile.png')} style={styles.pro_image}  />
        </View>

        <View style={{alignItems:'center'}}>
            <Text style={styles.text}>Vidusha Mindula</Text>
            <Text style={styles.text1}>vidushamindula@gmail.com</Text>
        </View>
        
       


    <View style={{marginTop:30,  }}>

        <Card style={styles.card1}>
        <TouchableOpacity><View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10}}><Text style={styles.cardtext}>Update Address</Text>
        <MaterialIcons style={{margin:10}} name="arrow-forward-ios" size={20} color="black"  /></View></TouchableOpacity>


            <View style={styles.verticleLine}></View>


            <TouchableOpacity><View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10}}><Text style={styles.cardtext}>Account</Text>
            <MaterialIcons style={{margin:10}} name="arrow-forward-ios" size={20} color="black"  /></View></TouchableOpacity>


        </Card>

    </View>
    <View style={{marginTop:30, }}>

        <Card style={styles.card2}>
        <TouchableOpacity><View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10}}><Text style={styles.cardtext}>Notifications</Text>
        <MaterialIcons style={{margin:10}} name="arrow-forward-ios" size={20} color="black"  /></View></TouchableOpacity>
            <View style={styles.verticleLine}></View>

            <TouchableOpacity><View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10}}><Text style={styles.cardtext}>Update Password</Text>
            <MaterialIcons style={{margin:10}} name="arrow-forward-ios" size={20} color="black"  /></View></TouchableOpacity>
            <View style={styles.verticleLine}></View>

            <TouchableOpacity><View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10}}><Text style={styles.cardtext}>Whishlist</Text>
            <MaterialIcons style={{margin:10}} name="arrow-forward-ios" size={20} color="black"  /></View></TouchableOpacity>
            <View style={styles.verticleLine}></View>

            <TouchableOpacity><View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10}}><Text style={styles.cardtext}>Change Language</Text>
            <MaterialIcons style={{margin:10}} name="arrow-forward-ios" size={20} color="black"  /></View></TouchableOpacity>
            <View style={styles.verticleLine}></View>
            
            <TouchableOpacity><View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10}}><Text style={styles.cardtext}>Contact Us</Text>
            <MaterialIcons style={{margin:10}} name="arrow-forward-ios" size={20} color="black"  /></View></TouchableOpacity>
            <View style={styles.verticleLine}></View>

            <TouchableOpacity><View style={{flexDirection:'row', justifyContent:'space-between',marginHorizontal:10}}><Text style={styles.cardtext}>FAQs</Text>
            <MaterialIcons style={{margin:10}} name="arrow-forward-ios" size={20} color="black"  /></View></TouchableOpacity>

        </Card>

    </View>

    </View>
  
);

    }

export default Profile;