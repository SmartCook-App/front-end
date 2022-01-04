import React, { FC, useState} from 'react';
import { View, Text, TouchableWithoutFeedback, Modal, TextInput} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';

import { TouchableOpacity } from 'react-native-gesture-handler';
import RDL from '../../../../screens/Recipes/RecipeDetails/RecipeDetailsLanguages'
import style from './SubtitleStyles'

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
    <View style={style.subtitleContainer}>
      <Text style={style.subtitle}>{text}</Text>
      {rightText? (
          <>
        <TouchableWithoutFeedback onPress={toggleModalVisibility}>
          <Text style={style.addButton}>{rightText}</Text>
        </TouchableWithoutFeedback>
         <Modal animationType="slide" 
                transparent visible={isModalVisible} 
                presentationStyle="overFullScreen" 
                onDismiss={toggleModalVisibility}>
             <View style={style.viewWrapper}>
                <View style={style.modalView}>
                  <Text style={style.myNotesTitle}>Mis Notas</Text>
                     <TextInput placeholder="Enter something..." 
                                multiline= {true}
                                value={inputValue} style={style.textInput} 
                                onChangeText={(value) => setInputValue(value)} />
                     {/** This button is responsible to close the modal */}
                     <TouchableOpacity style={style.uploadButtonContainer} >
                        <Text onPress={toggleModalVisibility} style={style.uploadButton}>{RDL[lang]?.saveButton}</Text>
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

