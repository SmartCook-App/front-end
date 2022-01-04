import React, { FC } from 'react';
import { Text, View } from 'react-native';
import style from './FilterComponentStyle';
import IoniconsIcon from 'react-native-vector-icons/Ionicons';
import { reorderFiltersHomeInteractor } from '../../redux/interactors/homeIconsInteractors';
import { useDispatch } from 'react-redux';

interface Props {
  id: any;
  name: any;
  title: any;
  isPressed: boolean;
  cookersView: boolean;
  setcookersView: any;
  updateOrderButtons: any;
  setupdateOrderButtons: any;
  screen: string;
}

const RoundFiltersComponents: FC<Props> = (props: Props) => {
  const { id, name, title, setcookersView, isPressed, screen } = props;
  let { cookersView } = props;
  const dispatch = useDispatch();

  const applyFilter = () => {
    // This is from this view
    if (title == 'cookers') {
      setcookersView(!cookersView);
    }
    const payload = {
      screen: screen,
      filter: {
        id: id,
        name: name,
        title: title,
        press: !isPressed,
        height: 150,
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
        <IoniconsIcon
          name={name}
          color={'black'}
          size={45}
          onPress={applyFilter}
        />
      </View>
      <Text style={style.title}>{title}</Text>
    </View>
  );
};

export default RoundFiltersComponents;
