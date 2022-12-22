import { View, Text,StatusBar, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import styles from '../consts/CartStyles'
import { Ionicons,AntDesign  } from '@expo/vector-icons';
import {Card} from 'react-native-shadow-cards';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Cart_Screen({navigation, route,qty }) {

  const product = route.params;
  console.log(qty);
 

  return (
    <View style={styles.container}>
    <StatusBar/>
    <View style={styles.view1}>

        
        <Ionicons name="arrow-back" size={28} color="black" onPress={() => navigation.goBack()}/>
      

        <TouchableOpacity>
        <AntDesign name="delete" size={28} color="black" />
        </TouchableOpacity>

    </View>

    <View style={styles.view2}>
        <Text style={{ fontSize:22}}>Shopping</Text>
        <Text style={{fontWeight:'bold', fontSize:22}}>Cart</Text>
        </View>

    <View style={styles.card_view}>

        <Card style={styles.card1}>
          <Text style={{alignSelf:'center'}}>
            {qty}
          </Text>

        <Image  source={product.image}style={{ resizeMode: "contain", flex: 1, height:100, width:100 }} />
        </Card>


        <Card style={styles.card1}>

        </Card>
        <Card style={styles.card1}>

        </Card>

        

    </View>

    
    <View style={styles.checkout}>
      <TouchableOpacity onPress={()=> navigation.navigate('Payment_Screen')}>
            <Card style={styles.checkout_card}>
                <Text style={styles.checkout_txt}>Proceed to checkout </Text>

            </Card>
            </TouchableOpacity>
    </View>
    

    </View>
  )
}