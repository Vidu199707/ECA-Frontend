import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from '../consts/ChatStyles';
import Msg from '../component/Msg.js';
import {data} from '../consts/MsgData';


let chats = [];
const Chat_Screen = () => {
  const [msg, setMsg] = useState('');
  const [chatList, setChatList] = useState([]);

  const getAnswer = q => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].question.includes(q.toLowerCase())) {
        chats = [...chats, {msg: data[i].answer, incomingMsg: true}];
        setChatList([...chats].reverse());
        return;
      }
    }

    chats = [
      ...chats,
      {msg: "Didn't recognise your question", incomingMsg: true},
    ];
    setChatList([...chats].reverse());
    return;
  };

  const onSendMsg = () => {
    chats = [...chats, {msg: msg, sentMsg: true}];
    setChatList([...chats].reverse());
    setTimeout(() => {
      getAnswer(msg);
    }, 1000);
    setMsg('');
  };

  return (
    <View  style={styles.container}>
      <FlatList
        style={{height: '87%', bottom: '20%'}}
        inverted={true}
        keyExtractor={(_, index) => index.toString()}
        data={chatList}
        renderItem={({item}) => (
          <Msg
            incomingMsg={item.incomingMsg}
            msg={item.msg}
            sentMsg={item.sentMsg}
          />
        )}
      />
      <View style={styles.typeMsgContainer}>
        <TextInput 
          style={styles.typeMsgBox}
          value={msg}
          placeholder="Type Here ..."
          onChangeText={val => setMsg(val)}
        />
        <TouchableOpacity
          style={[styles.sendBtn, {backgroundColor: msg ? 'orange' : 'grey'}]}
          disabled={msg ? false : true}
          onPress={() => onSendMsg()}>
          <Text style={styles.sendTxt}>send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Chat_Screen;