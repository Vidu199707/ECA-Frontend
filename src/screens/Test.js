//React Native Modal
//https://aboutreact.com/react-native-modal/
 
//import React in our code
import React, {useState} from 'react';
 
//import all the components we are going to use
import {
  Modal,
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
 
const Test = () => {
  const [showModal, setShowModal] = useState(false);
 
  return (
    <SafeAreaView style={{flex: 1}}>
     
        <Modal
          animationType={'slide'}
          transparent={true}
          visible={showModal}
          onRequestClose={() => {
            console.log('Modal has been closed.');
          }}>
          {/*All views of Modal*/}
          {/*Animation can be slide, slide, none*/}
          <View style={styles.modal}>
            <Text style={styles.text}>Modal is open!</Text>
            <Button
              title="Click To Close Modal"
              onPress={() => {
                setShowModal(!showModal);
              }}
            />
          </View>
        </Modal>
        {/*Updating the state to make Modal Visible*/}
        <Button
          title="Click To Open Modal"
          onPress={() => {
            setShowModal(!showModal);
          }}
        />
      
    </SafeAreaView>
  );
};
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    marginTop: 30,
  },
  modal: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 100,
  },
  text: {
    color: '#3f2949',
    marginTop: 10,
  },
});
 
export default Test;