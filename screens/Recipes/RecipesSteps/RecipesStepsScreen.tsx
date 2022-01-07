import React, { FC, useState } from 'react';
import { View, Text, ImageBackground, ScrollView, TouchableOpacity } from 'react-native';
import TopNavbar from '../../../components/TopNavbar/TopNavbarComponent';
import StepsRecipesStyle from './RecipesStepsStyle';
import AddSubButton from '../../../components/Recipes/AddSubButton/AddSubButtonComponent';
import StepsDetails from '../../../components/Recipes/RecipesSteps/StepsDetails/StepsDetailsComponent';
// import Video from 'react-native-video';

interface Props {
  navigation: any;
}

const RecipesStepsScreen: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const [amountPortions, setAmountPortions] = useState(1);

  return (
    <ImageBackground
      source={{ uri: 'https://reactjs.org/logo-og.png' }}
      style={StepsRecipesStyle.backgroundImage}
    >
      <ScrollView>
        <View style={StepsRecipesStyle.container}>
          <TopNavbar 
            navigation={navigation} 
            title={"Steps"}
            goBack={true}
            />
          <View style={StepsRecipesStyle.portions}>
            <AddSubButton
              text={'-'}
              OnPressfunction={'sub'}
              setAmountPortions={setAmountPortions}
              amountPortions={amountPortions}
            />
            <Text style={StepsRecipesStyle.portionText}>{amountPortions}</Text>
            <AddSubButton
              text={'+'}
              OnPressfunction={'add'}
              setAmountPortions={setAmountPortions}
              amountPortions={amountPortions}
            />
          </View>
          <View style={StepsRecipesStyle.ingredientsContainer}>
            <Text style={StepsRecipesStyle.ingredientsText}>
              10 gr cebolla
            </Text>
            <Text style={StepsRecipesStyle.ingredientsText}>
              10 gr cebolla
            </Text>
            <Text style={StepsRecipesStyle.ingredientsText}>
              10 gr cebolla
            </Text>
            <Text style={StepsRecipesStyle.ingredientsText}>
              10 gr cebolla
            </Text>
          </View>
        </View>
        <View style={StepsRecipesStyle.containerImages}>
          <StepsDetails
            numberOfStep="1"
            stepDescription="Corta las verduras bien finas en hileras."
          />
          <StepsDetails
            numberOfStep="2"
            stepDescription="Hecha a hervirlas en una olla con 3 litros de agua."
          />
          <StepsDetails
            numberOfStep="3"
            stepDescription="Escurre una vez blandas y viertelas en un bowl."
          />
          <StepsDetails
            numberOfStep="4"
            stepDescription="Mezcla todo y listo!"
          />
        </View>
        <View style={StepsRecipesStyle.ButtonContainer}>
          <TouchableOpacity
            onPress={() => console.log('marcar como cocinada')}
            style={StepsRecipesStyle.markAsCookedButton}
          >
            <Text style={StepsRecipesStyle.markAsCookedButtonText}>
              Marcar como cocinada
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
export default RecipesStepsScreen;
