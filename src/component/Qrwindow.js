import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { MaterialCommunityIcons } from '@expo/vector-icons';


export default function Qrwindow(){
    const navigation = useNavigation();

    return (
        
        <View style={styles.container}>
            <TouchableOpacity onPress={()=> navigation.navigate('Scanner')}>
            <MaterialCommunityIcons style={{alignSelf:'center'}} name="gesture-tap-button" size={35} color="blue" />
            <Text style={{color:'blue'}}>Scan your QR Here</Text>
                
            </TouchableOpacity>

        </View>
    )

}


const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        alignItems:'center',
        justifyContent:'center',
        backgroundColor: '#F7EFED',


    }
})