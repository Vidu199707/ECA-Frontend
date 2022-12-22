import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor:'#F7EFED'
    
    },
    menu_icon:{
      justifyContent:'space-between',
      flexDirection:'row',
      // backgroundColor:'yellow',
      marginHorizontal:30,
      marginTop:30
    },

    image: {
      flex: 1,
    },

    text: {
      
      alignSelf:'center',
      fontSize:16,
      fontWeight:'bold',
      color:'gray',


    },

    cardtext: {
      
      color: "#000",
      margin:10,
      fontSize:14,
      fontWeight:'bold',
      
      
      
    },

    text1: {
      alignSelf:'center',
      fontSize:12,
      color:'gray',

    },

      card1: {
       borderRadius:10,
       alignSelf:'center',
       height:100,
       justifyContent:'center'
       
    
      },
      card2: {
       borderRadius:10,
       alignSelf:'center',
       height:300,
       justifyContent:'center'
       
      },

      icon: {
        color: "#000",
        left:'5%',
        
      },
      verticleLine: {
        width:330,
        height:1,
        alignSelf:'center',
        backgroundColor: "#DFE5E2",
        marginVertical: 3,
        marginHorizontal:5,

        
      },

      categorytxt: {
        fontSize:16,
        fontWeight:'bold',
      },

      viewtxt: {
      
        fontSize:16,
        fontWeight:'bold',
        color:'#C00F25',
      },
      logo: {
      
        justifyContent:'center',
        alignSelf:'center',
        marginTop:30,
        marginBottom:10
      },
     
      pro_image: {
      
        height:70,
        width:70,
        resizeMode:'stretch',
        borderWidth:2,
        borderColor:"#fff",
        borderRadius:60

      },


  });
  
  export default styles;