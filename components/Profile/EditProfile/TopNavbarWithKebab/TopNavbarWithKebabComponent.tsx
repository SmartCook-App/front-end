import React, { FC, useState } from 'react';
import { Text, View, Alert, TouchableOpacity } from 'react-native';
import styles from './TopNavbarWithKebabStyles';
import TNWKL from './TopNavbarWithKebabLanguages';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Menu, MenuItem } from 'react-native-material-menu';
import { Ionicons } from '@expo/vector-icons';

interface Props {
  title: any;
  navigation: any;
  goBack: any;
  reportProblem: any;
}

const TopNavbarWithKebab: FC<Props> = (props: Props) => {
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const { title, goBack, reportProblem, navigation } = props;
  const [visible, setVisible] = useState(false);

  const hideMenu = () => {
    setVisible(false);
    {
      reportProblem ? (Alert.alert(TNWKL[lang]?.reportTitle, TNWKL[lang]?.reportSubTitle, [
        {
          text: TNWKL[lang]?.no,
          onPress: () => console.log('No'),
        },
        {
          text: TNWKL[lang]?.yes,
          onPress: () => console.log('OK'),
        },
      ])) : (
        Alert.alert(TNWKL[lang]?.weAreSorry, TNWKL[lang]?.areYouSure, [
          {
            text: TNWKL[lang]?.no,
            onPress: () => console.log('No'),
          },
          {
            text: TNWKL[lang]?.yes,
            onPress: () => console.log('OK'),
          },
        ])
      )
    }
  };

  const showMenu = () => setVisible(true);
  return (
    <View style={styles.mainContainer}>
      <View style={styles.horizontalContainer}>
        {goBack ? (
          <View style={styles.goBackContainer}>
            <TouchableOpacity onPress={navigation.goBack}>
              <Ionicons
                name="arrow-undo"
                style={styles.goBack}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.emptyView}>
          </View>
        )}
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <View style={styles.threeCircles}>
          <Menu
            visible={visible}
            anchor={
              <Text onPress={showMenu} style={styles.kababMenu}>
                ...
              </Text>
            }
            onRequestClose={hideMenu}
          >
            {reportProblem ? (
              <MenuItem onPress={hideMenu}>{TNWKL[lang]?.reportProblem}</MenuItem>
            ) : (
              <MenuItem onPress={hideMenu}>{TNWKL[lang]?.deleteAccount}</MenuItem>
            )}
          </Menu>
        </View>
      </View>
      <View style={styles.line}></View>
    </View>
  );
};

export default TopNavbarWithKebab;
