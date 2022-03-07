import React, { FC, useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  ImageBackground,
  TouchableHighlight,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Colors from '../../../assets/Colors';
import { AntDesign, MaterialIcons, SimpleLineIcons } from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { MaterialCommunityIcons, Entypo } from '@expo/vector-icons';
import Subtitle from '../../../components/Recipes/RecipeDetail/Subtitle/SubtitleComponent';
import NutritionCircles from '../../../components/Recipes/RecipeDetail/NutritionCircles/NutritionCirclesComponent';
import TopBar from '../../../components/Recipes/RecipeDetail/TopBar/TopBarComponent';
import AddSubButton from '../../../components/Recipes/AddSubButton/AddSubButtonComponent';
import styles from './RecipeDetailsStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import RDL from './RecipeDetailsLanguages';
import { Ionicons } from '@expo/vector-icons';
import { Modal } from 'react-native-paper';
import SelectBar from '../../../components/Recipes/RecipeDetail/SelectBar/SelectBarComponent';

interface Props {
  navigation: any;
  route: any;
}

const RecipeDetailsScreen: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const {
    time,
    likes,
    title,
    calories,
    fat,
    proteins,
    carbs,
    portions,
    // buscar id del owner para obtener el nombre y ver dde poner los tips
    owner,
    tips,
  } = props.route.params;
  const [amountPortions, setAmountPortions] = useState(portions);
  const [likeRecipe, setlikeRecipe] = useState(false);
  const [savedRecipe, setSavedRecipe] = useState(false);
  // TODO: eliminar esta data cuando tengamos la base de datos
  const data = ['1', '2', '3', '4', '5', '6'];
  const [inputValue, setInputValue] = useState('');
  const [visibleModalDate, setVisibleModalDate] = React.useState(false);
  const [visibleModalFoodTime, setVisibleModalFoodTime] = React.useState(false);
  const [visibleModalSaveInCategory, setVisibleModalSaveInCategory] =
    React.useState(false);
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const onPressStepsRecipes = () => {
    navigation.navigate('StepsRecipesScreen');
  };
  const closeModalDate = (item: any) => {
    setVisibleModalDate(!visibleModalDate);
  };
  const closeModalFoodTime = (item: any) => {
    setVisibleModalFoodTime(!visibleModalFoodTime);
  };
  const closeModalSaveInCategory = (item: any) => {
    setVisibleModalSaveInCategory(!visibleModalSaveInCategory);
  };
  const goBackToSelectDate = (item: any) => {
    setVisibleModalFoodTime(!visibleModalFoodTime);
    setVisibleModalDate(!visibleModalDate);
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={{
          uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
        }}
        style={styles.photo}
      >
        <ScrollView>
          <View style={styles.blackRectangule}>
            <TopBar
              navigation={navigation}
              likeRecipe={likeRecipe}
              visible={visibleModalDate}
              visibleCategory={visibleModalSaveInCategory}
              savedRecipe={savedRecipe}
              setVisible={setVisibleModalDate}
              setlikeRecipe={setlikeRecipe}
              setSavedRecipe={setSavedRecipe}
              setVisibleCategory={setVisibleModalSaveInCategory}
            />
            <View style={styles.centerText}>
              <Text style={styles.title}>{title}</Text>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.info}>
              <View style={styles.infoContainer}>
                <MaterialCommunityIcons
                  name="clock-time-five"
                  size={25}
                  color={Colors.light.yellowRecipeIcons}
                />
                <Text style={styles.infoText}> {time} min</Text>
              </View>
              <View style={styles.infoContainer}>
                <MaterialCommunityIcons
                  name="silverware-fork-knife"
                  size={25}
                  color={Colors.light.yellowRecipeIcons}
                />
                <Text style={styles.infoText}> Vegetariano</Text>
              </View>
              <View style={styles.infoContainer}>
                <AntDesign
                  name="heart"
                  size={25}
                  color={Colors.light.yellowRecipeIcons}
                />
                <Text style={styles.infoText}> {likes}</Text>
              </View>
              <View style={styles.infoContainer}>
                <AntDesign
                  name="apple1"
                  size={25}
                  color={Colors.light.yellowRecipeIcons}
                />
                <Text style={styles.infoText}> {calories}</Text>
              </View>
            </View>
            <TouchableHighlight
              onPress={onPressStepsRecipes}
              style={styles.seeRecipeDetailButton}
            >
              <MaterialCommunityIcons
                name={'pot-steam'}
                size={55}
                color={Colors.light.white}
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
              <Text style={styles.cookerInfo}>Receta por PaulaCocina</Text>
              <Text
                style={styles.cookerVisitProfile}
                onPress={() => navigation.navigate('ProfileScreen')}
              >
                {RDL[lang]?.visitProfile}
              </Text>
            </View>
          </View>
          <Subtitle
            text={RDL[lang]?.portions}
            rightText=""
            inputValue={'none'}
            setInputValue={'none'}
          />
          <View style={styles.portions}>
            <AddSubButton
              text={'-'}
              OnPressfunction={'sub'}
              setAmountPortions={setAmountPortions}
              amountPortions={amountPortions}
            />
            <Text style={styles.portionText}>{amountPortions}</Text>
            <AddSubButton
              text={'+'}
              OnPressfunction={'add'}
              setAmountPortions={setAmountPortions}
              amountPortions={amountPortions}
            />
          </View>
          <Subtitle
            text={RDL[lang]?.whatYouNeed}
            rightText=""
            inputValue={'none'}
            setInputValue={'none'}
          />
          <View style={styles.whatYouNeedContainer}>
            <FlatList
              data={data}
              numColumns={3}
              columnWrapperStyle={{
                flexGrow: 1,
                justifyContent: 'space-evenly',
              }}
              renderItem={({ item: avatar }) => (
                <Avatar
                  rounded
                  size="large"
                  icon={{ name: 'user', type: 'font-awesome' }}
                  activeOpacity={1}
                  containerStyle={styles.cookerAvatar}
                  source={{
                    uri: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80',
                  }}
                />
              )}
            />
          </View>
          <Subtitle
            text={RDL[lang]?.myNotes}
            rightText={RDL[lang]?.add}
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <View style={styles.myNotesContainer}>
            <Text style={styles.myNoteText}>{inputValue}</Text>
          </View>
          <Subtitle
            text={RDL[lang]?.nutritionInfo}
            rightText=""
            inputValue={'none'}
            setInputValue={'none'}
          />
          <View style={styles.nutriCirclesContainer}>
            <NutritionCircles
              calories={calories}
              proteins={proteins}
              fat={fat}
              carbs={carbs}
            />
          </View>
        </ScrollView>
        <Modal
          visible={visibleModalDate}
          contentContainerStyle={styles.modalContainer}
        >
          <TouchableOpacity onPress={closeModalDate}>
            <Entypo name="cross" size={30} style={styles.closeModalCross} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{RDL[lang]?.chooseDay}</Text>
          <SelectBar
            onPressFirstModal={visibleModalDate}
            setOnPressFirstModal={setVisibleModalDate}
            onPressSecondModal={visibleModalFoodTime}
            setOnPressSecondModal={setVisibleModalFoodTime}
            title={RDL[lang]?.selectDay}
          />
        </Modal>
        <Modal
          visible={visibleModalFoodTime}
          contentContainerStyle={styles.modalContainer}
        >
          <View style={styles.modalTopBarContainer}>
            <TouchableOpacity onPress={goBackToSelectDate}>
              <Ionicons
                name="arrow-undo"
                size={25}
                style={styles.modalGoBack}
              />
            </TouchableOpacity>
            <TouchableOpacity onPress={closeModalFoodTime}>
              <Entypo
                name="cross"
                size={30}
                style={styles.closeSecondModalCross}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.modalTitle}>{RDL[lang]?.chooseFood}</Text>
          <SelectBar
            onPressFirstModal={visibleModalDate}
            setOnPressFirstModal={setVisibleModalDate}
            onPressSecondModal={visibleModalFoodTime}
            setOnPressSecondModal={setVisibleModalFoodTime}
            title={RDL[lang]?.selectFood}
          />
        </Modal>
        <Modal
          visible={visibleModalSaveInCategory}
          contentContainerStyle={styles.modalContainer}
        >
          <TouchableOpacity onPress={closeModalSaveInCategory}>
            <Entypo name="cross" size={30} style={styles.closeModalCross} />
          </TouchableOpacity>
          <Text style={styles.modalTitle}>{RDL[lang]?.chooseCategory}</Text>
          <SelectBar
            onPressFirstModal={visibleModalDate}
            setOnPressFirstModal={setVisibleModalDate}
            onPressSecondModal={visibleModalSaveInCategory}
            setOnPressSecondModal={setVisibleModalSaveInCategory}
            title={RDL[lang]?.selectCategory}
          />
        </Modal>
      </ImageBackground>
    </View>
  );
};

export default RecipeDetailsScreen;
