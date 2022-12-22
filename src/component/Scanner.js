import { View, Text, StyleSheet, Button, Linking} from 'react-native'
import React,{useEffect,useState} from 'react'
import { BarCodeScanner } from 'expo-barcode-scanner';
import { StatusBar } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from 'react-native';

export default function Scanner(){
    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned]= useState(false);


    useEffect(()=>{
        ( async ()=> {
            const {status} = await BarCodeScanner.requestPermissionsAsync();
            setHasPermission(status === 'granted');
        })();

    },[]);


    const handleBarCodeScanned =({type, data}) => {
        setScanned(true);
         alert (`Bar Code With Type ${type} and data ${ Linking.openURL(`${data}`)} has been scanned`);
       // alert(`Bar Code With Type ${type} and data ${data} has been scanned` );

    };

    if(hasPermission === null){
        return <Text>Requesting for camera permission</Text>
    }

    if(hasPermission === false){
        return <Text>No Access to camera</Text>
    }

    return (
        
        <View style={styles.container}>
 

            <BarCodeScanner
                    
                    onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
                    style ={StyleSheet.absoluteFill}
                    />
                    
                    {scanned && <Button title='Tap to Scan Again' onPress={() => setScanned(false)} />}
        </View>
    )

}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignSelf:'center',
        height:100,
        width:300,
      

    }
})