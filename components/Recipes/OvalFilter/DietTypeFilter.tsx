import React, { FC, useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import style from './OvalFilterStyles';
import {
  FontAwesome,
  MaterialCommunityIcons,
  Entypo,
} from '@expo/vector-icons';

interface Props {
  itemValue: any;
}

const DietTypeFilter: FC<Props> = (props: Props) => {
  const { itemValue } = props;
  const [press, setPress] = useState(false);

  const changeToPress = () => {
    setPress(!press);
  };

  return (
    <TouchableOpacity onPress={changeToPress}>
      <View style={style.directionIconAndFilterText}>
        {Object.keys(itemValue) == 'Sin gluten' ? (
          <>
            <MaterialCommunityIcons
              name={itemValue[Object.keys(itemValue)]}
              size={30}
              style={style.iconFilterOptions}
            />
            <Text style={style.filterOptions}>{Object.keys(itemValue)}</Text>
          </>
        ) : (
          <>
            <FontAwesome
              name={itemValue[Object.keys(itemValue)]}
              size={30}
              style={style.iconFilterOptions}
            />
            <Text style={style.filterOptions}>{Object.keys(itemValue)}</Text>
          </>
        )}
        {press ? (
          <FontAwesome name={'check'} size={30} style={style.check} />
        ) : null}
      </View>
    </TouchableOpacity>
  );
};
export default DietTypeFilter;
