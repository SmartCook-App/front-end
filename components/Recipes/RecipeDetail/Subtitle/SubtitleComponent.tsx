import React, { FC, useState} from 'react';
import { View, Text, StyleSheet, TouchableWithoutFeedback, Button, Modal, TextInput} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { normalizeFontSize, normalizePx } from '../../../../styles/normalize';
import Colors from '../../../../assets/Colors';
import { TouchableOpacity } from 'react-native-gesture-handler';
import RDL from '../../../../screens/Recipes/RecipeDetails/RecipeDetailsLanguages'

interface Props {
  text: string;
  rightText: string;
  inputValue: string;
  setInputValue: any;
}

const Subtitle: FC<Props> = (props: Props) => {
  const { text, rightText, inputValue, setInputValue} = props;
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );

  // This is to manage Modal State
  const [isModalVisible, setModalVisible] = useState(false);

  // Create toggleModalVisibility function that will
  // Open and close modal upon button clicks.
  const toggleModalVisibility = () => {
      setModalVisible(!isModalVisible);
  };
    
  return (
    <View style={RecipeSubtitleStyle.subtitleContainer}>
      <Text style={RecipeSubtitleStyle.subtitle}>{text}</Text>
      {rightText? (
          <>
        <TouchableWithoutFeedback onPress={toggleModalVisibility}>
          <Text style={RecipeSubtitleStyle.addButton}>{rightText}</Text>
        </TouchableWithoutFeedback>
         <Modal animationType="slide" 
                transparent visible={isModalVisible} 
                presentationStyle="overFullScreen" 
                onDismiss={toggleModalVisibility}>
             <View style={RecipeSubtitleStyle.viewWrapper}>
                <View style={RecipeSubtitleStyle.modalView}>
                  <Text style={RecipeSubtitleStyle.myNotesTitle}>Mis Notas</Text>
                     <TextInput placeholder="Enter something..." 
                                multiline= {true}
                                value={inputValue} style={RecipeSubtitleStyle.textInput} 
                                onChangeText={(value) => setInputValue(value)} />
                     {/** This button is responsible to close the modal */}
                     <TouchableOpacity style={RecipeSubtitleStyle.uploadButtonContainer} >
                        <Text onPress={toggleModalVisibility} style={RecipeSubtitleStyle.uploadButton}>{RDL[lang]?.saveButton}</Text>
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

const RecipeSubtitleStyle = StyleSheet.create({
  subtitleContainer: {
    backgroundColor: Colors.light.transparentBlack,
    padding: normalizePx(15),
    flexDirection: 'row',
    justifyContent: 'space-between',
    fontFamily: 'nunito-light'
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
      elevation: normalizePx(5),
      transform: [{ translateX: -(400 * 0.4) }, 
                  { translateY: -90 }],
      height: normalizePx(250),
      width: normalizePx(400*0.8),
      backgroundColor: "#fff",
      borderRadius: normalizePx(7),
  },
  textInput: {
      width: "80%",
      height: "70%",
      borderRadius: normalizePx(5),
      paddingVertical: normalizePx(8),
      paddingHorizontal: normalizePx(16),
      borderColor: "rgba(0, 0, 0, 0.2)",
      borderWidth: normalizePx(1),
      marginBottom: normalizePx(8),
      textAlignVertical: 'top'
  },
  uploadButtonContainer: {
    backgroundColor: 'black',
    height: normalizePx(30),
    width: normalizePx(80),
    justifyContent: 'center',
    borderRadius: normalizePx(20)
  },
  myNotesTitle: {
    fontSize: normalizePx(20)
  }
});
