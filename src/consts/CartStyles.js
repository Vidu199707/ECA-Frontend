import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
      flex: 1,
    
    },
    view1:{
       
        justifyContent:'space-between',
        flexDirection:'row',
        // backgroundColor:'yellow',
        marginHorizontal:30,
        marginTop:30
        
      },
    view2:{
      marginLeft:30,
      marginTop:30
      
      },
      card_view:{
     alignItems:'flex-start',
      marginTop:50,
     

      },
      card1:{
      height:100,
      width:200,
      marginTop:20,
      backgroundColor:'#F3C424',
      borderBottomRightRadius:30,
      borderTopRightRadius:30
      
      },
      checkout:{
        position:'absolute',
        bottom:10,
        alignSelf:'center'
      },
    
      checkout_card:{
        height:50,
        width:320,
        backgroundColor:'red',
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
      },
      checkout_txt:{
        color:'#fff',
        fontWeight:'bold'
      },
    


    });

    export default styles;

  