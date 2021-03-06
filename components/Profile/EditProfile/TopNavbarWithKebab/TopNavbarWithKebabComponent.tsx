import React, { FC, useState } from 'react';
import { TouchableOpacity, Text, View, Dimensions, Alert } from 'react-native';
import styles from './TopNavbarWithKebabStyles';
import { Ionicons } from '@expo/vector-icons';
import TNWKL from './TopNavbarWithKebabLanguages';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Menu, MenuItem } from 'react-native-material-menu';

interface Props {
  navigation: any;
  title: any;
  goBack: any;
}
// screen sizing
const { width, height } = Dimensions.get('window');
// orientation must fixed
const SCREEN_WIDTH = width < height ? width : height;

const TopNavbarWithKebab: FC<Props> = (props: Props) => {
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const { title, navigation, goBack } = props;
  const [visible, setVisible] = useState(false);

  const hideMenu = () => {
    setVisible(false);
    Alert.alert(TNWKL[lang]?.weAreSorry, TNWKL[lang]?.areYouSure, [
      {
        text: TNWKL[lang]?.no,
        onPress: () => console.log('No'),
      },
      {
        text: TNWKL[lang]?.yes,
        onPress: () => console.log('OK'),
      },
    ]);
  };

  const showMenu = () => setVisible(true);
  return (
    <View>
      <>
        <View style={styles.container}>
          <TouchableOpacity style={styles.touch}>
            <Text>
              <Ionicons
                name="arrow-undo"
                style={styles.goBack}
                onPress={navigation.goBack}
              />
            </Text>
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
          <Menu
            visible={visible}
            anchor={
              <Text onPress={showMenu} style={styles.kababMenu}>
                ...
              </Text>
            }
            onRequestClose={hideMenu}
          >
            <MenuItem onPress={hideMenu}>{TNWKL[lang]?.deleteAccount}</MenuItem>
          </Menu>
        </View>
      </>
      <View style={styles.line}></View>
    </View>
  );
};

export default TopNavbarWithKebab;
