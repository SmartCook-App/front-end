import React, { FC, useState } from 'react';
import {
  View,
  StyleSheet,
  ScrollView,
  Text,
  ImageBackground,
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
import { FAB } from 'react-native-elements';

interface Props {
  navigation: any;
}

const RecipieHome: FC<Props> = (props: Props) => {
  const { navigation } = props;

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
            <Text style={RecipieStyle.title}>
              Tallarines con Pesto y otras salsas
            </Text>
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
            <MaterialCommunityIcons
              name={'pot-steam'}
              size={55}
              color="white"
              style={RecipieStyle.seeRecipieDetailButton}
            />
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
              // source={{
              //   uri: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg',
              // }}
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
          <Subtitle text="Porciones" />
          <View style={RecipieStyle.portions}>
            <FAB buttonStyle={RecipieStyle.addPortionButton} title="-" />
            <Text style={RecipieStyle.portionText}>2</Text>
            <FAB buttonStyle={RecipieStyle.addPortionButton} title="+" />
          </View>
          <Subtitle text="Lo que necesitas" />
          <Subtitle text="Información nutricional" />
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
  },
  blackRectangule: {
    height: normalizePx(240),
    backgroundColor: Colors.light.transparentBlack,
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
    padding: normalizePx(15),
    fontFamily: 'nunito-light',
    color: Colors.light.white,
    alignItems: 'stretch',
    fontSize: normalizeFontSize(25),
  },
  seeRecipieDetailButton: {
    position: 'absolute',
    bottom: normalizePx(55),
    right: normalizePx(20),
    borderRadius: normalizePx(50),
    backgroundColor: Colors.light.transparentYellow,
  },
  goDownArrow: {
    alignItems: 'center',
    marginTop: normalizePx(100),
    backgroundColor: Colors.light.transparentBlack,
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
  },
});
