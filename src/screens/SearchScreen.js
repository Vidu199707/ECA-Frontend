import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import styles from '../consts/SearchStyle'
import { Feather, Ionicons } from '@expo/vector-icons'

export default function SearchScreen({navigation}) {
  return (
    <View style={styles.container}>
        <StatusBar/>
        <View style={styles.view1}>

           
            <Ionicons name="arrow-back" size={28} color="black" onPress={() => navigation.goBack()} />
          
            <Feather name="shopping-cart" size={28} color="black" onPress={() => navigation.navigate('Cart')} />
            

        </View>

        
    

    </View>
  )
}

