import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7EFED',
        
      },

      menu_icon:{
        
        justifyContent:'space-between',
        flexDirection:'row',
        marginHorizontal:30,
        marginVertical:20
      },

      heading:{
       
        justifyContent:'space-between',
        flexDirection:'row',
        // backgroundColor:"yellow",
        marginHorizontal:30,
        marginTop:20,
        alignItems:'center',
       
      
      },
     
      category:{
        // backgroundColor:"yellow",
        marginHorizontal:15,
        marginTop:30,
        marginBottom:20,
       
       

      },
      category_txt:{
       color:'#fff',
       fontWeight:'bold',
        fontSize:14

      },
      card0:{
        height:40,
        width:130,
        backgroundColor:'#F90148',
        borderRadius:30,
        marginHorizontal:5,
        justifyContent:'center',
        alignItems:'center',
      
      },


      card_view:{
        
        // // backgroundColor:"yellow",
        // marginHorizontal:15,
        // marginTop:20,
       // marginTop: 200,
        
      },

      card:{
        height:300,
        width:200,
        backgroundColor:'#ffd966',
        borderRadius:25,
        marginHorizontal:15,
        justifyContent:'center',
        
      },
      name:{
        color:'#990000',
        fontSize:22,
        fontWeight:'bold',
        marginTop:10,
        marginLeft:30,
       
        
      },
      LKR:{
        color:'#fff',
        fontSize:18,
        fontWeight:'bold',
        alignSelf:'flex-end',
        marginRight:40,
        
      },
      price_txt:{
        color:'#000',
        fontSize:14,
        fontWeight:'bold',
        marginLeft:30,
        // alignSelf:'flex-end',
        // marginRight:10
        
      },

      img:{
        height:200,
        width:200,
        left: 50,
        marginTop:10,
        
        
      },
      seller_heading:{
        fontSize:14,
        fontWeight:'bold',
        marginHorizontal:15
        
      },
      best_seller:{
        width: 70, 
        height: 70,  
        // backgroundColor:'#F90148', 
        // borderRadius:20,
        marginHorizontal:20
        
      },

      verticleLine: {
        width:360,
        height:1,
        alignSelf:'center',
        backgroundColor: "#5b5b5b",
        marginTop:15,
       
      },

      gridView: {
        marginTop: 10,
       flex: 1,
       
      },
      itemContainer: {
        
        justifyContent: 'flex-start',
        borderRadius: 5,
        padding: 10,
        height: 150,
      },
      itemName: {
        fontSize: 14,
        marginTop:8,
       alignSelf:'center',
        fontWeight: '600',
      },
      itemCode: {
        fontWeight: '600',
        fontSize: 12,
        color: '#fff',
      },

     
   
  });
export default styles;