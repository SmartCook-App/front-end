import React, { FC, useState } from 'react';
import { Text, View, Alert } from 'react-native';
import styles from './TopNavbarWithKebabStyles';
import TNWKL from './TopNavbarWithKebabLanguages';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import { Menu, MenuItem } from 'react-native-material-menu';

interface Props {
  title: any;
}

const TopNavbarWithKebab: FC<Props> = (props: Props) => {
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const { title } = props;
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
          <View style={{flex: 1}}>
            <Text style={styles.title}>{title}</Text>
          </View>
          <View style={{flex: 0.1}}>
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
        </View>
      </>
      <View style={styles.line}></View>
    </View>
  );
};

export default TopNavbarWithKebab;
