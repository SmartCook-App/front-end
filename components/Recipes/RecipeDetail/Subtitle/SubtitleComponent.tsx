import React, { FC, useState} from 'react';
import { View, Text, TouchableWithoutFeedback, Modal, TextInput} from 'react-native';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { TouchableOpacity } from 'react-native-gesture-handler';
import SL from './SubtitleLanguages'
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
  const [isModalVisible, setModalVisible] = useState(false);

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
                  <Text style={style.myNotesTitle}>{SL[lang]?.notes}</Text>
                     <TextInput placeholder={SL[lang]?.enterSomething} 
                                multiline= {true}
                                value={inputValue} style={style.textInput} 
                                onChangeText={(value) => setInputValue(value)} />
                     <TouchableOpacity style={style.uploadButtonContainer} >
                        <Text onPress={toggleModalVisibility} style={style.uploadButton}>{SL[lang]?.saveButton}</Text>
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

