import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7EFED',
        
      },

      view1:{
        justifyContent:'space-between',
        flexDirection:'row',
        // backgroundColor:'yellow',
        marginHorizontal:30,
        marginTop:30
      },

      fields:{
            marginTop:20,
            // backgroundColor:'yellow',
            justifyContent:'center'

      },
      txtInput:{
        width:300,
       borderWidth:1,
        alignSelf:'center',
        fontSize:12,
        backgroundColor:"#fff",
        borderRadius:20,


      },
      item: {
        flexDirection:'row',
        justifyContent:'space-between',
        backgroundColor: '#fff000',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
        alignItems:'center'
      },
      title: {
        
       
        fontSize: 16,

      },



      img:{
        height:25,
        width:70,
        

      },
      payment:{
        position:'absolute',
        bottom:10,
        alignSelf:'center'
      },
    
      payment_card:{
        height:50,
        width:320,
        backgroundColor:'red',
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
      },
      payment_txt:{
        color:'#fff',
        fontWeight:'bold'
      },

    })
    export default styles;