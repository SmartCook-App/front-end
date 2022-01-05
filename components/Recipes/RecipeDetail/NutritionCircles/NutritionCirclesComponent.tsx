import React, { FC } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import style from './NutritionCirclesStyles';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/store';
import NCL from './NutritionCirclesLanguages';

interface Props {
  calories: string;
  proteins: string;
  fat: string;
  carbs: string;
}

const NutritionCircles: FC<Props> = (props: Props) => {
  const { calories, proteins, fat, carbs } = props;
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );

  return (
    <>
      <TouchableHighlight style={style.nutriCircles} underlayColor="red">
        <View>
          <Text style={style.nutriCirclesText}>{NCL[lang]?.calories}</Text>
          <Text style={style.nutriCirclesNumber}>{calories}</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={style.nutriCircles} underlayColor="red">
        <View>
          <Text style={style.nutriCirclesText}>{NCL[lang]?.protein}</Text>
          <Text style={style.nutriCirclesNumber}>
            {proteins}
            {NCL[lang]?.grams}
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={style.nutriCircles} underlayColor="red">
        <View>
          <Text style={style.nutriCirclesText}>{NCL[lang]?.fat}.</Text>
          <Text style={style.nutriCirclesNumber}>
            {fat}
            {NCL[lang]?.grams}
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={style.nutriCircles} underlayColor="red">
        <View>
          <Text style={style.nutriCirclesText}>{NCL[lang]?.carbs}</Text>
          <Text style={style.nutriCirclesNumber}>
            {carbs}
            {NCL[lang]?.grams}
          </Text>
        </View>
      </TouchableHighlight>
    </>
  );
};

export default NutritionCircles;
