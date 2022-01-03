import React, { FC, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableHighlight,
  FlatList
} from 'react-native';
import Colors from '../../../assets/Colors';
import {
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
} from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Subtitle from '../../../components/Recipes/RecipeDetail/Subtitle/SubtitleComponent';
import NutritionCircles from '../../../components/Recipes/RecipeDetail/NutritionCircles/NutritionCirclesComponent';
import TopBar from '../../../components/Recipes/RecipeDetail/TopBar/TopBarComponent';
import AddSubButton from '../../../components/Recipes/AddSubButton/AddSubButtonComponent';
import styles from './RecipeDetailsStyles';

interface Props {
  navigation: any;
}

const RecipeDetailsScreen: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const [amountPortions, setAmountPortions] = useState(1);
  // TODO: eliminar esta data cuando tengamos la base de datos
  const data = ["1", "2", "3", "4", "5", "6"]
  const [inputValue, setInputValue] = useState("");

  const onPressStepsRecipes = () => {
    navigation.navigate("StepsRecipesScreen")
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require(`../../../assets/Images/Eliminar/ensalada.jpg`)}
        style={styles.photo}
      >
        <ScrollView>
        <View style={styles.blackRectangule}>
          <TopBar navigation={navigation}/>
            <View style={styles.centerText}>
              <Text style={styles.title}>
                Tallarines con Pesto y otras salsas
              </Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.info}>
              <View style={styles.infoContainer}>
                <MaterialIcons
                  name="access-time"
                  size={25}
                  color={Colors.light.yellowRecipeIcons}
                />
                <Text style={styles.infoText}> 30 min</Text>
              </View>
              <View style={styles.infoContainer}>
                <AntDesign
                  name="hearto"
                  size={25}
                  color={Colors.light.yellowRecipeIcons}
                />
                <Text style={styles.infoText}> Vegetariano</Text>
              </View>
              <View style={styles.infoContainer}>
                <AntDesign
                  name="apple-o"
                  size={25}
                  color={Colors.light.yellowRecipeIcons}
                />
                <Text style={styles.infoText}> 2500</Text>
              </View>
              <View style={styles.infoContainer}>
                <SimpleLineIcons
                  name="fire"
                  size={25}
                  color={Colors.light.yellowRecipeIcons}
                />
                <Text style={styles.infoText}> 450</Text>
              </View>
            </View>
            <TouchableHighlight onPress={onPressStepsRecipes}  style={styles.seeRecipeDetailButton}>
              <MaterialCommunityIcons
                name={'pot-steam'}
                size={55}
                color="white"
              />
              </TouchableHighlight>
            <View style={styles.goDownArrow}>
              <SimpleLineIcons name="arrow-down" size={30} color="white" />
            </View>
          </View>
          <View style={styles.cookerContainer}>
            <Avatar
              rounded
              size="large"
              icon={{ name: 'user', type: 'font-awesome' }}
              activeOpacity={1}
              containerStyle={styles.cookerAvatar}
            />
            <View style={styles.cookerInfoContainer}>
              <Text style={styles.cookerInfo}>
                Receta por PaulaCocina
              </Text>
              <Text
                style={styles.cookerVisitProfile}
                onPress={() => navigation.navigate('ProfileScreen')}
              >
                Visitar perfil
              </Text>
            </View>
          </View>
          <Subtitle text="Porciones" rightText='' inputValue={'none'} setInputValue={'none'}/>
          <View style={styles.portions}>
            <AddSubButton text={"-"} OnPressfunction={"sub"} setAmountPortions={setAmountPortions} amountPortions={amountPortions}/>
            <Text style={styles.portionText}>{amountPortions}</Text>
            <AddSubButton text={"+"} OnPressfunction={"add"} setAmountPortions={setAmountPortions} amountPortions={amountPortions}/>
          </View>
          <Subtitle text="Lo que necesitas" rightText='' inputValue={'none'} setInputValue={'none'}/>
          <View style={styles.whatYouNeedContainer}>
            <FlatList
              data={data}
              numColumns={3}
              columnWrapperStyle={{flexGrow: 1, justifyContent: 'space-evenly'}}
              renderItem={({item: avatar})=> 
              <Avatar
                rounded
                size="large"
                icon={{ name: 'user', type: 'font-awesome' }}
                activeOpacity={1}
                containerStyle={styles.cookerAvatar}
                source={require(`../../../assets/Images/Eliminar/ensalada.jpg`)}
                
              />
            }
            />
           
          </View>
          <Subtitle text="Mis notas" rightText='añadir' inputValue={inputValue} setInputValue={setInputValue}/>
          <View style={styles.myNotesContainer}>
            <Text style={styles.myNoteText}>{inputValue}</Text>
          </View>
          <Subtitle text="Información nutricional" rightText='' inputValue={'none'} setInputValue={'none'}/>
          <View style={styles.nutriCirclesContainer}>
            <NutritionCircles calories="140" proteins="14" fat="16" carbs="86" />
          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default RecipeDetailsScreen;
