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
        
        marginTop:20,
        // justifyContent:'center',
        alignItems:'center',
        // backgroundColor:'yellow',
      },

    view3:{
        position:'absolute',
        bottom:10,
        alignSelf:'center'
      },

      card:{
        height:320,
        width:320,
        backgroundColor:'#ffd966',
        borderRadius:25,
        marginHorizontal:20,
        justifyContent:'center',
        alignItems:'center'
        
      },
      
      img:{
        height:180,
        width:150,


      },
      cart_card:{
        height:50,
        width:320,
        backgroundColor:'red',
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',

    
      },

      pname:{
        alignSelf:'center',
        marginTop:20,
        fontWeight:'bold',
        fontSize:16,
        
    
    
      },
      desc_txt:{
        marginTop:20,
        marginHorizontal:40
    
    
      },
      cart_button_txt:{
        color:'#fff',
        fontWeight:'bold'

      },
    


      
})

export default styles;