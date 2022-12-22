import { View, Text , Image, FlatList} from 'react-native'
import React from 'react'
import { FlatGrid } from "react-native-super-grid";
import products from '../consts/product';
import styles from '../consts/Styles';

export default function CategotyItem() {
  return (
    
     <>
     <View
          style={{
            marginTop: 40,
            flexDirection: "row",
            justifyContent: "space-between",
            marginHorizontal: 10,
          }}
        >
          <Text style={styles.seller_heading}>Popular</Text>
        </View>

        <View style={styles.verticleLine}></View>
     <View>
          <FlatGrid
              itemDimension={100}
              data={products}
              key={1}
             scrollEnabled
             
             style={styles.gridView}
              // staticDimension={300}
              // fixed
              spacing={20}
              renderItem={({ item }) => (
                  <View style={[styles.itemContainer]}>
                      <Image
                          source={item.image}
                          style={{ height: 100, width: 100, alignSelf: "center" }}
                          resizeMode={"contain"} />
                      <Text style={styles.itemName}>{item.name}</Text>
                  </View>
              )} />
      </View>
      
  
      
      <View
          style={{
              marginTop: 40,
              flexDirection: "row",
              justifyContent: "space-between",
              marginHorizontal: 10,
          }}
      >
              <Text style={styles.seller_heading}>Top rated</Text>
          </View><View style={styles.verticleLine}></View><View>
              <FlatGrid
                  itemDimension={100}
                  data={products}
                  key={2}
                  style={styles.gridView}
                  // staticDimension={300}
                  // fixed
                  spacing={20}
                  renderItem={({ item }) => (
                      <View style={[styles.itemContainer]}>
                          <Image
                              source={item.image}
                              resizeMode={"contain"}
                              style={{ height: 100, width: 100, alignSelf: "center" }} />
                          <Text style={styles.itemName}>{item.name}</Text>
                      </View>
                  )} />
          </View><View
              style={{
                  marginTop: 40,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
              }}
          >
              <Text style={styles.seller_heading}>New collection</Text>
          </View><View style={styles.verticleLine}></View><View>
              <FlatGrid
                  itemDimension={100}
                  data={products}
                  key={3}
                  style={styles.gridView}
                  // staticDimension={300}
                  // fixed
                  spacing={20}
                  renderItem={({ item }) => (
                      <View style={[styles.itemContainer]}>
                          <Image
                              source={item.image}
                              resizeMode={"contain"}
                              style={{ height: 100, width: 100, alignSelf: "center" }} />
                          <Text style={styles.itemName}>{item.name}</Text>
                      </View>
                  )} />
          </View><View
              style={{
                  marginTop: 40,
                  flexDirection: "row",
                  justifyContent: "space-between",
                  marginHorizontal: 10,
              }}
          >
              <Text style={styles.seller_heading}>Most Viewed</Text>
          </View><View style={styles.verticleLine}></View><View>
              <FlatGrid
                  itemDimension={100}
                  data={products}
                  key={4}
                  style={styles.gridView}
                  // staticDimension={300}
                  // fixed
                  spacing={20}
                  renderItem={({ item }) => (
                      <View style={[styles.itemContainer]}>
                          <Image
                              source={item.image}
                              resizeMode={"contain"}
                              s
                              style={{ height: 100, width: 100, alignSelf: "center" }} />
                          <Text style={styles.itemName}>{item.name}</Text>
                      </View>
                  )} />
          </View>
          </>
  )
}