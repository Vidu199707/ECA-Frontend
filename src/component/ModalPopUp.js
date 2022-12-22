import React from "react";
import { Card } from "react-native-shadow-cards";
import {
  Modal,
  Animated,
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";



const ModalPoup = ({visible, }) => {
  
  
  // const [setID] = React.useState(id);
  
  
  const [showModal, setShowModal] = React.useState(visible);
  const scaleValue = React.useRef(new Animated.Value(0)).current;


    
const data= [
    { id:'1',
      location: "AFLOAT",
      company:"AFLOAT Construction-CDPLC NC",
      value:4,
      repair:"AFLOAT repair",
      repairValue:5,
      piping:"AFLOAT Piping",
      pipingValue:1,
      workshop:"AFLOAT Workshops",
      workshopValue:7
    },


    {

      id:'2',
      location: "FORKLIFT",
      company:"FORKLIFT Construction-CDPLC NC",
      value:5,
      repair:"FORKLIFT repair",
      repairValue:2,
      piping:"FORKLIFT Piping",
      pipingValue:4,
      workshop:"FORKLIFT Workshops",
      workshopValue:2
    },

    {

      id:'3',
      location: "PICKLING",
      company:"PICKLING Construction-CDPLC NC",
      value:1,
      repair:"PICKLING repair",
      repairValue:3,
      piping:"PICKLING Piping",
      pipingValue:0,
      workshop:"PICKLING Workshops",
      workshopValue:2
    },
    {

      id:'4',
      location: "SCAFOLDING",
      company:"SCAFOLDING Construction-CDPLC NC",
      value:6,
      repair:"SCAFOLDING repair",
      repairValue:4,
      piping:"SCAFOLDING Piping",
      pipingValue:5,
      workshop:"SCAFOLDING Workshops",
      workshopValue:7
    },
    {
      id:'5',
      location: "WELDING",
      company:"Hull Construction-CDPLC NC",
      value:68,
      repair:"Hull repair",
      repairValue:12,
      piping:"Piping",
      pipingValue:8,
      workshop:"Workshops",
      workshopValue:40
    },
  ]

    
    

  React.useEffect(() => {
    toggleModal();
  }, [visible]);


  const toggleModal = () => {
    if (visible) {
      setShowModal(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } 
    
    else {
      setTimeout(() => setShowModal(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    
    <Modal transparent visible={showModal} removeClippedSubviews>
  
      <View style={styles.modalBackGround}>
        <Animated.View
          style={[styles.modalContainer, {transform: [{scale: scaleValue}]}]}>
          

          <View style={{alignItems: 'center'}}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setShowModal(false)}>
              <Image
                source={require('../asset/close.png')}
                style={{height: 30, width: 30,marginBottom:25}}
              />
            </TouchableOpacity>
            
          </View>
        </View>

      

        <View style={{alignItems: 'center'}}>

        <Text style={[{fontWeight:'bold',marginBottom:30, }]}>Choose your fav category</Text>

        </View>

        </Animated.View>
      </View>

    </Modal>
  );
};
const styles = StyleSheet.create({
 
  poptext1:{
    width:180,
    alignItems:'center',
    fontSize:12
  },
  poptext:{
    width:30,
    alignItems:'center',
    fontSize:12
  },
  popcard:{
    marginVertical:3,
    paddingVertical:12,
    width:260,
    flexDirection: "row",
    justifyContent: 'space-between',
    shadowColor: "#000",
   
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 7,
  },
  
  verticleLine: {
    width: 1,
    height: "120%",
    backgroundColor: "gray",
    marginHorizontal: 10,
  },
  
  modalBackGround: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '80%',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 30,
    borderRadius: 20,
    elevation: 20,
  },
  header: {
    width: '100%',
    height: 20,
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
});
export default ModalPoup;

