import React, { FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import style from './SearchButtonStyles';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import Colors from '../../../../assets/Colors';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import SBL from './SearchButtonLanguages';

interface Props {
  navigation: any;
}

const SearchButtonComponent: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  const pressButton = () => {
    navigation.navigate('SearchRecipes');
  };

  return (
    <View>
      <View style={style.circle}>
        <TouchableOpacity onPress={pressButton}>
          <IoniconsIcon
            name={'search-outline'}
            color={Colors.light.black}
            size={45}
          />
        </TouchableOpacity>
      </View>
      <Text style={style.title}>{SBL[lang]?.search}</Text>
    </View>
  );
};

export default SearchButtonComponent;
