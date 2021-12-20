import React, { FC, useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import TopBar from '../../components/RecipieHomeComponents/TopBar';
import StepsRecipiesStyle from './StepsRecipiesStyle';
import CircleButton from '../../components/RecipieHomeComponents/CircleButton';
import ImageInSteps from '../../components/StepsRecipiesComponent/ImageInSteps';
// import Video from 'react-native-video';

interface Props {
  navigation: any;
}

const StepsRecipiesScreen: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const [amountPortions, setAmountPortions] = useState(1);

  return (
    <ImageBackground
      source={require('../../assets/Images/ensalada.jpg')}
      style={StepsRecipiesStyle.backgroundImage}
    >
      <ScrollView>
        <View style={StepsRecipiesStyle.container}>
          <TopBar navigation={navigation} />
          <View style={StepsRecipiesStyle.portions}>
            <CircleButton
              text={'-'}
              OnPressfunction={'sub'}
              setAmountPortions={setAmountPortions}
              amountPortions={amountPortions}
            />
            <Text style={StepsRecipiesStyle.portionText}>{amountPortions}</Text>
            <CircleButton
              text={'+'}
              OnPressfunction={'add'}
              setAmountPortions={setAmountPortions}
              amountPortions={amountPortions}
            />
          </View>
          <View style={StepsRecipiesStyle.ingredientsContainer}>
            <Text style={StepsRecipiesStyle.ingredientsText}>
              10 gr cebolla
            </Text>
            <Text style={StepsRecipiesStyle.ingredientsText}>
              10 gr cebolla
            </Text>
            <Text style={StepsRecipiesStyle.ingredientsText}>
              10 gr cebolla
            </Text>
            <Text style={StepsRecipiesStyle.ingredientsText}>
              10 gr cebolla
            </Text>
          </View>
        </View>
        {/* <Video */}
        {/* source={{ */}
        {/* uri: 'https://www.youtube.com/watch?v=mpSmBuco6I0', */}
        {/* type: 'mp4', */}
        {/* }} */}
        {/* />  */}
        <View style={StepsRecipiesStyle.containerImages}>
          <ImageInSteps
            numberOfStep="1"
            stepDescription="Corta las verduras bien finas en hileras."
          />
          <ImageInSteps
            numberOfStep="2"
            stepDescription="Hecha a hervirlas en una olla con 3 litros de agua."
          />
          <ImageInSteps
            numberOfStep="3"
            stepDescription="Escurre una vez blandas y viertelas en un bowl."
          />
          <ImageInSteps
            numberOfStep="4"
            stepDescription="Mezcla todo y listo!"
          />
        </View>
        <View style={StepsRecipiesStyle.ButtonContainer}>
          <TouchableOpacity
            onPress={() => console.log('marcar como cocinada')}
            style={StepsRecipiesStyle.markAsCookedButton}
          >
            <Text style={StepsRecipiesStyle.markAsCookedButtonText}>
              Marcar como cocinada
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default StepsRecipiesScreen;
