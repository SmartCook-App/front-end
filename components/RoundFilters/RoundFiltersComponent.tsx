import React, { FC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import style from './RoundFiltersStyles';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { reorderFiltersHomeInteractor } from '../../redux/interactors/homeIconsInteractors';
import { useDispatch } from 'react-redux';
import { normalizePx } from '../../styles/normalize';
import { Avatar } from 'react-native-paper';

interface Props {
  id: any;
  title: any;
  isPressed: boolean;
  cookersView: boolean;
  setcookersView: any;
  updateOrderButtons: any;
  setupdateOrderButtons: any;
  screen: string;
  image: any;
}

const RoundFiltersComponents: FC<Props> = (props: Props) => {
  const { id, title, setcookersView, isPressed, screen, image } = props;
  let { cookersView } = props;
  const dispatch = useDispatch();

  const applyFilter = () => {
    if (title == 'cookers') {
      setcookersView(!cookersView);
    }
    const payload = {
      screen: screen,
      filter: {
        id: id,
        title: title,
        press: !isPressed,
        image: image,
      },
    };
    dispatch(reorderFiltersHomeInteractor(payload));
  };

  return (
    <View>
      <View
        style={
          isPressed
            ? [style.circle, style.circlePress]
            : [style.circle, style.circleNotPress]
        }
      >
        <TouchableOpacity onPress={applyFilter}>
          <Avatar.Image
            size={53}
            source={image}
          />
        </TouchableOpacity>
      </View>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default RoundFiltersComponents;
