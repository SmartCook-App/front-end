import React, { FC, useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Button, Modal, TextInput} from 'react-native';
import styles from '../../styles/HomeStyles';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import Colors from '../../assets/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props {
  text: string;
  rightText: string;
  inputValue: string;
  setInputValue: any;
}

const Subtitle: FC<Props> = (props: Props) => {
  const { text, rightText, inputValue, setInputValue} = props;

  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
      setModalVisible(!isModalVisible);
  };
    
  return (
    <View style={RecipieSubtitleStyle.subtitleContainer}>
      <Text style={RecipieSubtitleStyle.subtitle}>{text}</Text>
      {rightText? (
          <>
        <TouchableWithoutFeedback onPress={toggleModalVisibility}>
          <Text style={RecipieSubtitleStyle.addButton}>{rightText}</Text>
        </TouchableWithoutFeedback>
         <Modal animationType="slide" 
                transparent visible={isModalVisible} 
                presentationStyle="overFullScreen" 
                onDismiss={toggleModalVisibility}>
             <View style={RecipieSubtitleStyle.viewWrapper}>
                 <View style={RecipieSubtitleStyle.modalView}>
                     <TextInput placeholder="Enter something..." 
                                value={inputValue} style={RecipieSubtitleStyle.textInput} 
                                onChangeText={(value) => setInputValue(value)} />
                     {/** This button is responsible to close the modal */}
                     <TouchableOpacity style={RecipieSubtitleStyle.uploadButtonContainer} onPress={toggleModalVisibility} >
                        <Text style={RecipieSubtitleStyle.uploadButton}>Añadir</Text>
                      </TouchableOpacity>
                 </View>
             </View>
         </Modal>
          </>
        ):(null)}
    </View>
       
       
  );
};

export default Subtitle;

const RecipieSubtitleStyle = StyleSheet.create({
  subtitleContainer: {
    backgroundColor: Colors.light.transparentBlack,
    padding: normalizePx(15),
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  subtitle: {
    color: Colors.light.white,
    fontSize: normalizeFontSize(12),
    left: normalizePx(20),
    textTransform: 'uppercase',
  },
  addButton: {
    fontSize: normalizeFontSize(10),
    color: Colors.light.white,
  },
  uploadButton: {
    fontSize: normalizeFontSize(10),
    color: 'white',
    alignSelf: 'center'
  },
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  viewWrapper: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.2)",
  },
  modalView: {
      alignItems: "center",
      justifyContent: "center",
      position: "absolute",
      top: "50%",
      left: "50%",
      elevation: 5,
      transform: [{ translateX: -(400 * 0.4) }, 
                  { translateY: -90 }],
      height: 180,
      width: 400 * 0.8,
      backgroundColor: "#fff",
      borderRadius: 7,
  },
  textInput: {
      width: "80%",
      borderRadius: 5,
      paddingVertical: 8,
      paddingHorizontal: 16,
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderWidth: 1,
      marginBottom: 8,
  },
  uploadButtonContainer: {
    backgroundColor: 'black',
    height: 30,
    width: 80,
    justifyContent: 'center',
    borderRadius: 20
  }
});
