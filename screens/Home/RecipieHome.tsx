import React, { FC, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
  TouchableHighlight,
  FlatList
} from 'react-native';
import FL from '../../assets/Languages/FiltersLanguages';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { normalizeFontSize, normalizePx } from '../../styles/normalize';
import window from '../../assets/Layout';
import Colors from '../../assets/Colors';
import {
  AntDesign,
  MaterialIcons,
  SimpleLineIcons,
  Ionicons,
} from '@expo/vector-icons';
import { Avatar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Subtitle from '../../components/RecipieHomeComponents/Subtitle';
import NutritionCircles from '../../components/RecipieHomeComponents/NutritionCircles';

interface Props {
  navigation: any;
}

const RecipieHome: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const [amountPortions, setamountPortions] = useState(0);
  const onPressAddButton = (item: any) => {
    setamountPortions(amountPortions+1)
  };
  // TODO: eliminar esta data cuando tengamos la base de datos
  const data = ["1", "2", "3", "4", "5", "6"]
  const onPressSubstractButton = (item: any) => {
    if (amountPortions >0){
      setamountPortions(amountPortions-1)
    }
    
  };
  const doNothing = (item: any) => {
    console.log("hi")
  };
  return (
    <View style={RecipieStyle.container}>
      <ImageBackground
        source={require('../../assets/Images/ensalada.jpg')}
        style={RecipieStyle.photo}
      >
        <ScrollView>
          <View style={RecipieStyle.blackRectangule}>
            <View style={RecipieStyle.header}>
              <View style={RecipieStyle.alignRight}>
                <Ionicons
                  name="md-arrow-undo-sharp"
                  size={27}
                  color={Colors.light.transparentYellow}
                  onPress={navigation.goBack}
                />
              </View>
              <View style={RecipieStyle.alignLeft}>
                <View style={RecipieStyle.iconsContainer}>
                  <AntDesign
                    name="hearto"
                    size={25}
                    color={Colors.light.yellow}
                  />
                  <Ionicons
                    name="share-social-outline"
                    size={25}
                    color={Colors.light.yellow}
                  />
                  <MaterialIcons
                    name="playlist-add"
                    size={30}
                    color={Colors.light.yellow}
                  />
                </View>
              </View>
            </View>
            <View style={RecipieStyle.centerText}>
            <Text style={RecipieStyle.title}>
              Tallarines con Pesto y otras salsas
            </Text>
            </View>
          </View>
          <View style={RecipieStyle.bottom}>
            <View style={RecipieStyle.info}>
              <View style={RecipieStyle.infoContainer}>
                <MaterialIcons
                  name="access-time"
                  size={25}
                  color={Colors.light.yellowRecipieIcons}
                />
                <Text style={RecipieStyle.infoText}> 30 min</Text>
              </View>
              <View style={RecipieStyle.infoContainer}>
                <AntDesign
                  name="hearto"
                  size={25}
                  color={Colors.light.yellowRecipieIcons}
                />
                <Text style={RecipieStyle.infoText}> Vegetariano</Text>
              </View>
              <View style={RecipieStyle.infoContainer}>
                <AntDesign
                  name="apple-o"
                  size={25}
                  color={Colors.light.yellowRecipieIcons}
                />
                <Text style={RecipieStyle.infoText}> 2500</Text>
              </View>
              <View style={RecipieStyle.infoContainer}>
                <SimpleLineIcons
                  name="fire"
                  size={25}
                  color={Colors.light.yellowRecipieIcons}
                />
                <Text style={RecipieStyle.infoText}> 450</Text>
              </View>
            </View>
            <TouchableHighlight onPress={doNothing}  style={RecipieStyle.seeRecipieDetailButton}>
              <MaterialCommunityIcons
                name={'pot-steam'}
                size={55}
                color="white"
              />
              </TouchableHighlight>
            <View style={RecipieStyle.goDownArrow}>
              <SimpleLineIcons name="arrow-down" size={30} color="white" />
            </View>
          </View>
          <View style={RecipieStyle.cookerContainer}>
            <Avatar
              rounded
              size="large"
              icon={{ name: 'user', type: 'font-awesome' }}
              activeOpacity={1}
              containerStyle={RecipieStyle.cookerAvatar}
            />
            <View style={RecipieStyle.cookerInfoContainer}>
              <Text style={RecipieStyle.cookerInfo}>
                Receta por PaulaCocina
              </Text>
              <Text
                style={RecipieStyle.cookerVisitProfile}
                onPress={() => navigation.navigate('IndexScreen')}
              >
                Visitar perfil
              </Text>
            </View>
          </View>
          <Subtitle text="Porciones"/>
          <View style={RecipieStyle.portions}>
            <TouchableHighlight onPress={onPressAddButton} style={RecipieStyle.changePortionButton}>
            <Text style={RecipieStyle.portionText}>+</Text>
            </TouchableHighlight>
            <Text style={RecipieStyle.portionText}>{amountPortions}</Text>
            <TouchableHighlight onPress={onPressSubstractButton} style={RecipieStyle.changePortionButton}>
            <Text style={RecipieStyle.portionText}>-</Text>
            </TouchableHighlight>
          </View>
          <Subtitle text="Lo que necesitas" />
          <View style={RecipieStyle.whatYouNeedContainer}>
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
                containerStyle={RecipieStyle.cookerAvatar}
                source={require('../../assets/Images/ensalada.jpg')}
              />
            }
            />
           
          </View>

          <Subtitle text="Información nutricional" />
          <View style={RecipieStyle.nutriCirclesContainer}>
            <NutritionCircles calories="140" proteins="14" fat="16" carbs="86" />

          </View>
        </ScrollView>
      </ImageBackground>
    </View>
  );
};

export default RecipieHome;

const RecipieStyle = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },
  photo: {
    flex: 1,
    resizeMode: 'stretch', // or 'cover'
    opacity: 3
  },
  centerText:{
    flex: 1,
  },
  changePortionButton:{
    height: normalizePx(70),
    width: normalizePx(70),
    borderRadius: normalizePx(40),
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: Colors.light.transparentYellow,
  },
  blackRectangule: {
    height: normalizePx(240),
    backgroundColor: Colors.light.transparentBlack,
  },
  whatYouNeedContainer:{
    padding: 5
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  alignLeft: {
    marginTop: normalizePx(50),
    marginBottom: normalizePx(25),
    left: normalizePx(240),
  },
  alignRight: {
    marginTop: normalizePx(50),
    marginBottom: normalizePx(30),
    left: normalizePx(20),
  },
  bottom: {
    height: normalizePx(170),
    marginTop: normalizePx(475),
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: normalizePx(10),
    paddingHorizontal: normalizePx(10),
  },
  infoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: normalizePx(10),
  },
  infoText: {
    color: Colors.light.white,
    fontWeight: 'bold',
  },
  title: {
    paddingHorizontal: normalizePx(20),
    fontFamily: 'nunito-light',
    color: Colors.light.white,
    fontSize: normalizeFontSize(25),
  },
  seeRecipieDetailButton: {
    position: 'absolute',
    bottom: normalizePx(55),
    right: normalizePx(20),
    borderRadius: normalizePx(50),
    height: 70,
    width: 70,
    alignSelf:"center",
    padding:7,
    backgroundColor: Colors.light.transparentYellow,
  },
  goDownArrow: {
    alignItems: 'center',
    marginTop: normalizePx(100),
    // backgroundColor: Colors.light.transparentBlack,
  },
  iconsContainer: {
    width: normalizePx(140),
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  cookerContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: normalizePx(60),
    paddingVertical: normalizePx(15),
  },
  cookerAvatar: {
    backgroundColor: Colors.light.transparentBlack,
    marginVertical: 10
  },
  cookerInfoContainer: {
    flexDirection: 'column',
  },
  cookerInfo: {
    color: Colors.light.white,
    fontWeight: 'bold',
    fontSize: normalizeFontSize(12),
  },
  cookerVisitProfile: {
    color: Colors.light.white,
  },
  portions: {
    alignItems: 'center',
    flexDirection: 'row',
    padding: normalizePx(15),
    paddingHorizontal: normalizePx(110),
    justifyContent: 'space-between',
  },
  addPortionButton: {
    backgroundColor: Colors.light.yellow,
  },
  portionText: {
    color: Colors.light.white,
    fontWeight: 'bold',
    fontSize: normalizeFontSize(40),
    padding: 5,
  },
  nutriCirclesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalizePx(40),
    paddingVertical: normalizePx(30),
    justifyContent: 'space-between',
  },
  nutriCircles: {
    borderRadius: normalizePx(50),
    width: normalizePx(70),
    height: normalizePx(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C4C4C4',
    borderWidth: normalizePx(2),
  },
  nutriCirclesText: {
    color: Colors.light.white,
  },
  nutriCirclesNumber: {
    color: Colors.light.yellow,
    fontWeight: 'bold',
  },
});
