import { View, Text, TouchableOpacity, StatusBar, TextInput, FlatList, Image, Alert, } from 'react-native'
import React, { useState } from 'react'
import { Ionicons, Feather } from '@expo/vector-icons'
import styles from '../consts/PaymentStyles'
import { Card } from 'react-native-shadow-cards'





const alert1 = () =>
Alert.alert("Confirm your Payment ", "If You sure about your payment, press OK", [
  {
    text: "Cancel",
    onPress: () =>  Alert.alert("","Payment cansel") ,
    style: "cancel",
  },
  { text: "OK", onPress: () => Alert.alert("","Successfully paid") },
  
]);


``

const SUPERHERO_DATA = [
    {
      id: '1',
      title: 'Visa / Master',
      imag:require('../asset/visa.png')
    },
    {
      id: '2',
      title: 'Google pay',
      imag:require('../asset/gpay.png')
    },
    {
      id: '3',
      title: 'Paypal',
      imag:require('../asset/paypal.png')
    },
  ];

  const Item = ({ item, onPress, backgroundColor, textColor }) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, backgroundColor]}>
     
      <Text style={[styles.title, textColor]}>{item.title}</Text>
      <Image source={item.imag} style={styles.img} resizeMode={'contain'}/>
    </TouchableOpacity>
  );

export default function Payment_Screen({navigation}) {
    
    const [selectedId, setSelectedId] = useState(null);

    const renderItem = ({ item }) => {
      const backgroundColor = item.id === selectedId ? "#f1c232" : "#e6e5e3";
      const color = item.id === selectedId ? 'white' : 'black';
  


 
      
      return (
        <Item
          item={item}
          onPress={() => setSelectedId(item.id)}
          backgroundColor={{ backgroundColor }}
          textColor={{ color }}
        />

        
      );
    };

   

  
  return (
    <View style={styles.container}>

        <StatusBar/>

        <View style={styles.view1}>

  
              <Ionicons name="arrow-back" size={28} color="black" onPress={() => navigation.goBack()} />
              <Feather name="shopping-cart" size={28} color="black" onPress={() => navigation.navigate("Cart")} />
      

      </View>


    <View style={styles.fields}>
      
    <FlatList
        data={SUPERHERO_DATA}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        extraData={selectedId}
      />
   </View>

    <View>



    </View>


      <View style={styles.payment}>
      <TouchableOpacity>
            <Card style={styles.payment_card}>
                <Text style={styles.payment_txt}>Pay </Text>

            </Card>
            </TouchableOpacity>
    </View>

    </View>
    
  )
}