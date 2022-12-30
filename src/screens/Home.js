import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  StatusBar,
  ScrollView,
  Image,
  Animated,
} from "react-native";
import React,{useState, useEffect} from "react";
import { Entypo, Feather } from "@expo/vector-icons";
import { Card } from "react-native-shadow-cards";
// import products from "../consts/product";
import category from "../consts/Category";
import styles from "../consts/Styles";
import ModalPoup from "../component/ModalPopUp";
import CategotyItem from "../component/CategotyItem";
import axios from "axios";


export default function Home({ navigation }) {

  const [visible, setShowModal] = React.useState(false);
  const [product, getProduct, ] = useState([]);

  useEffect(() => {
   
    axios
      .get(
        "http://192.168.137.1:80/Home/GetBag"
      )
      .then((res) => getProduct(res.data))
      .catch((err) => console.log(err));
  }, []);



  //----------------------------------------------Card items-----------------------------------------------------

  const CardItem = () => {
    return (
      <ScrollView
        horizontal
        nestedScrollEnabled={true}
        showsHorizontalScrollIndicator={false}
      >
        {product.map((product, i) => (
          <View key={product.bid}>
            <Card style={styles.card}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={styles.name}>{product.bName}</Text>
              </View>

              <Text style={styles.price_txt}>{product.bPrice}</Text>
              <TouchableOpacity
                onPress={() => navigation.navigate("Product_Screen", product)}
              >
                <Image
                  style={styles.img}
                  source={product.image}
                  alt={product.name}
                  resizeMode={"contain"}
                />
              </TouchableOpacity>
            </Card>
          </View>
        ))}
      </ScrollView>
    );
  };

  //----------------------------------------------------------------------------------------------------------------------------------

  return (
    
    <View
    style={styles.container}>
      <StatusBar backgroundColor={"#F7EFED"} barStyle="dark-content" />
      

      <View style={styles.menu_icon}>
        <TouchableOpacity >
          <Entypo name="menu" size={28} color="black" onPress={setShowModal} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Feather
            name="shopping-cart"
            size={28}
            color="black"
            onPress={() => navigation.navigate("Cart")}
          />
        </TouchableOpacity>
      </View>

      <View style={styles.heading}>
        <View>
          <Text style={{ fontSize: 22 }}>Our</Text>
          <Text style={{ fontWeight: "bold", fontSize: 22 }}>Product</Text>
        </View>
        <View>
          <Feather
            style={{}}
            name="search"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Search")}
          />
        </View>
      </View>

      <View style={styles.category}>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          nestedScrollEnabled={true}
        >
          {category.map((category) => (
            <TouchableOpacity key={category.id}>
              <Card style={styles.card0}>
                <Text style={styles.category_txt}>{category.name}</Text>
              </Card>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      {/* ------------------------------------------- Full scroll view Start here--------------------------------------------------- */}

      <ScrollView>
        {/* ---------------------------------------------- Middle Cards ---------------------------------------------------- */}

        <View style={styles.card_view}>
          <CardItem />
        </View>

        {/* ---------------------------------------------- Best sellers ----------------------------------------------------- */}

        <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text style={styles.seller_heading}>Best Sellers</Text>

          <TouchableOpacity>
            <Text style={styles.seller_heading}>View All </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.verticleLine}></View>

        <View style={{ marginTop: 5 }}>
          <ScrollView
            nestedScrollEnabled={true}
            horizontal
            style={{ marginTop: 10 }}
            showsHorizontalScrollIndicator={false}
          >
            <TouchableOpacity>
              <Image
                style={styles.best_seller}
                resizeMode={"contain"}
                source={require("../asset/logo1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.best_seller}
                resizeMode={"contain"}
                source={require("../asset/logo2.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.best_seller}
                resizeMode={"contain"}
                source={require("../asset/logo3.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.best_seller}
                resizeMode={"contain"}
                source={require("../asset/logo4.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.best_seller}
                resizeMode={"contain"}
                source={require("../asset/logo1.png")}
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image
                style={styles.best_seller}
                resizeMode={"contain"}
                source={require("../asset/logo2.png")}
              />
            </TouchableOpacity>
          </ScrollView>
        </View>

        <View style={styles.verticleLine}></View>
       
          {/* <CategotyItem /> */}
       
      </ScrollView>

      <ModalPoup visible={visible}></ModalPoup>
    </View>
  );
}
