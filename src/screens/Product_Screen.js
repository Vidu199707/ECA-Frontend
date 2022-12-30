import { View, Text,TouchableOpacity, StatusBar, Image} from 'react-native'
import React, { useState ,useEffect} from 'react'
import styles from '../consts/ProductStyle';
import { Ionicons,Feather } from '@expo/vector-icons';
import { Card } from 'react-native-shadow-cards';
import products from '../consts/product';
import NumericInput from 'react-native-numeric-input'
import Cart_Screen from './Cart_Screen';
import AsyncStorage from '@react-native-async-storage/async-storage'; 
// import { Axios } from 'axios';
import { Button } from 'react-native-paper';
import axios, * as others from 'axios';



export default function Product_Screen({navigation, route}) {

    const [products, getProduct, ] = useState([]);

  useEffect(() => {
   
    // axios
    //   .get(
    //     "http://192.168.137.1:80/Home/GetBag"
    //   )
    //   .then((res) => getProduct(res.data))
    //   .catch((err) => console.log(err));
    console.log(route.params.bDesc);
  }, []);


    const product = route.params;
    const [qty, setQty] = React.useState(1);
    //console.log(qty)

  return (
    <View style={styles.container}>
        <StatusBar/>
        <View style={styles.view1}>

           
            <Ionicons name="arrow-back" size={28} color="black" onPress={() => navigation.goBack()} />
          
            <Feather name="shopping-cart" size={28} color="black" onPress={() => navigation.navigate('Cart')} />
            

        </View>

        <View style={styles.view2}>
            
            <Card style={styles.card}>
           
           <Image  source={product.image}style={{ resizeMode: "contain", flex: 1, height:200, width:200 }} />
            

            </Card>
        </View>

        
        <View style={{flexDirection:'row', justifyContent:'space-between', marginHorizontal:40}} >
            <Text style={styles.pname}>{product.bName}</Text>
            <Text style={styles.pname}>{product.bPrice}</Text>
        </View>

        <View style={styles.desc_txt} >
        <NumericInput editable={false}
            onChange={setQty}
        //   initValue={1}
           minValue={1}
           maxValue={10}
           totalWidth={100} 
           totalHeight={30} 
           value={qty}
           step={1}
           valueType='integer'
           rounded 
           rightButtonBackgroundColor='#ce7e00' 
           leftButtonBackgroundColor='#ce7e00'/>

        </View>


        <View style={styles.desc_txt}>
            <Text style={{ textAlign:'justify',}}>{product.bDesc}</Text>
           

        </View>
        
        {/* <View style={styles.desc_txt}>
        
            <Text style={{fontSize:16, fontWeight:'bold'}}>features</Text>
            <Text style={{}}>{product.feature.one}</Text>
            <Text style={{}}>{product.feature.two}</Text>
            <Text style={{}}>{product.feature.three}</Text>
              
        </View> */}

        <View style={styles.view3}>
            <TouchableOpacity onPress={() => navigation.navigate("Cart", product,qty)}>
            <Card style={styles.cart_card}>
                <Text style={styles.cart_button_txt}>Add to My Cart</Text>

            </Card>
            </TouchableOpacity>

           
        </View>

    </View>
  )
}
