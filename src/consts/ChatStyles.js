import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  incomingMsgBox: {
    backgroundColor: 'white',
    maxWidth: '70%',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'flex-start',
    marginVertical: 5,
    marginHorizontal: 5,
    borderWidth: 0.5,
    borderColor: 'grey',
  },
  incomingMsgText: {color: 'black', fontSize: 16},

  sentMsgBox: {
    backgroundColor: 'green',
    maxWidth: '70%',
    borderRadius: 10,
    padding: 5,
    alignSelf: 'flex-end',
    marginVertical: 5,
    marginHorizontal: 5,
  },

  sentMsgText: {color: '#fff', fontSize: 16},

  typeMsgContainer: {
    flexDirection: 'row',
    marginHorizontal: 10,
    bottom:60,
    
  },

  typeMsgBox: {
    borderWidth: 0.8,
    borderColor: 'grey',
    padding: 10,
    width: '78%',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },

  sendBtn: {
    width: '20%',
    borderRadius:10,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:5,
  },

  sendTxt: {color: 'white'},

  container:{
    backgroundColor:'#F7EFED'
  }
});

export default styles;