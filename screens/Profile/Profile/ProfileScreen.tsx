import React, { FC, useState } from 'react';
import {
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Modal } from 'react-native-paper';
import RoundFiltersComponents from '../../../components/RoundFilters/RoundFiltersComponent';
import PSL from './ProfileLanguages';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import RecipesComponent from '../../../components/ShowAllRecipes/ShowAllRecipesComponent';
import { Ionicons, Entypo } from '@expo/vector-icons';
import styles from './ProfileStyles';
import { Text } from '../../../components/Themed';
import { addFilterHomeInteractor } from '../../../redux/interactors/homeIconsInteractors';
import { HomeIconTypes } from '../../../redux/types/homeIconsTypes';
import Colors from '../../../assets/Colors';
import TopNavbarWithKebabComponent from '../../../components/Profile/EditProfile/TopNavbarWithKebab/TopNavbarWithKebabComponent';

interface Props {
  navigation: any;
  id: any;
  title: any;
  isPressed: boolean;
  image: any;
}

const AccountScreen: FC<Props> = (props: Props) => {
  const { navigation, id, title, isPressed, image } = props;
  const state = useSelector((state: RootState) => state);
  const [updateOrderButtons, setupdateOrderButtons] = useState(false);
  const [cookersView, setcookersView] = useState(false);
  const [ownProfile, setOwnProfile] = useState(true);
  const [visibleModalAddCategory, setVisibleAddCategory] = useState(false);
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const onPressEditProfile = (item: any) => {
    navigation.navigate('EditProfileScreen');
  };

  const addFilter = () => {
    setVisibleAddCategory(!visibleModalAddCategory);
    const newFilter: HomeIconTypes = {
      id: id,
      title: title,
      press: !isPressed,
      image: image,
    };
    dispatch(addFilterHomeInteractor(newFilter));
  };
  const closeModalAddCategory = (item: any) => {
    setVisibleAddCategory(!visibleModalAddCategory);
  };

  return (
    <>
      <SafeAreaView style={styles.mainContainer}>
        <View style={{ flex: 0.1 }}>
          <TopNavbarWithKebabComponent
            title={'PERFIL'}
            goBack={false}
            reportProblem={true}
            navigation={navigation}
          />
        </View>
        <View style={{ flex: 0.9 }}>
          <View style={styles.headerContainer}>
            <View style={styles.headerRowContainer}>
              <Ionicons name={'person-circle-outline'} size={80} />
              <View style={styles.headerTextContainer}>
                <Text style={styles.textProfile}>Nombre</Text>
                {/* Aca hay que reemplazar con la informacion del usuario cuando */}
                <Text style={styles.textProfile}>Link Página</Text>
                {/* tengamos la data. */}
                <Text style={styles.textProfile}>Descripcion</Text>
              </View>
            </View>
            {ownProfile ? (
              <TouchableOpacity
                style={styles.followButton}
                onPress={onPressEditProfile}
              >
                <Text>{PSL[state.language]?.editButton}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.followButton}>
                <Text>{PSL[state.language]?.followButton}</Text>
              </TouchableOpacity>
            )}
          </View>
          <View style={styles.filtersContainer}>
            {ownProfile ? (
              <View style={styles.addFilterContainer}>
                <TouchableOpacity
                  style={styles.addFilterButton}
                  onPress={addFilter}
                >
                  <Ionicons name={'add'} size={45} color={'black'} />
                </TouchableOpacity>
                <Text style={styles.addFilterButtonTitle}>
                  {PSL[state.language]?.addFilter}
                </Text>
              </View>
            ) : null}
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {state.homeIcons.accountsIconArray.map((icon: any) => (
                <RoundFiltersComponents
                  id={icon.id}
                  title={icon.title}
                  isPressed={icon.press}
                  updateOrderButtons={updateOrderButtons}
                  setupdateOrderButtons={setupdateOrderButtons}
                  cookersView={cookersView}
                  setcookersView={setcookersView}
                  screen={'AccountScreen'}
                  image={icon.image}
                />
              ))}
            </ScrollView>
          </View>
          <View style={styles.switchContainer}>
            {ownProfile ? (
              <>
                <TouchableOpacity>
                  <Text style={styles.switchContainerText}>
                    {PSL[state.language]?.savedRecipes}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity>
                  <Text style={styles.switchContainerText}>
                    {PSL[state.language]?.accountsFollowed}
                  </Text>
                </TouchableOpacity>
              </>
            ) : null}
          </View>
          <ScrollView style={styles.recipesContainer}>
            <RecipesComponent
              name={'name'}
              image={'image'}
              cal={'cal'}
              time={'time'}
              navigation={navigation}
            />
          </ScrollView>
          <Modal
            visible={visibleModalAddCategory}
            contentContainerStyle={styles.modalContainer}
          >
            <TouchableOpacity onPress={closeModalAddCategory}>
              <Entypo name="cross" size={30} style={styles.closeModalCross} />
            </TouchableOpacity>
            <Text style={styles.modalTitle}>
              {PSL[state.language]?.addCategoryModalTitle}
            </Text>
            <TextInput
              placeholderTextColor={Colors.light.darkGray}
              style={styles.modalTextInput}
              placeholder={PSL[state.language]?.inputTextModalPlaceholder}
              onChangeText={(text) => setText(text)}
              value={text}
            />
            <TouchableOpacity
              style={styles.addCategoryButtonContainer}
              onPress={closeModalAddCategory}
            >
              <Text style={styles.addCategoryButton}>
                {PSL[state.language]?.add}
              </Text>
            </TouchableOpacity>
          </Modal>
        </View>
      </SafeAreaView>
    </>
  );
};

export default AccountScreen;
