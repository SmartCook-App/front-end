import React, { FC } from 'react';
import { View, Text, TouchableHighlight } from 'react-native';
import style from './NutritionCirclesStyles';

interface Props {
  calories: string;
  proteins: string;
  fat: string;
  carbs: string;
}

const NutritionCircles: FC<Props> = (props: Props) => {
  const { calories, proteins, fat, carbs } = props;

  return (
    <>
      <TouchableHighlight style={style.nutriCircles} underlayColor="red">
        <View>
          <Text style={style.nutriCirclesText}>Cal.</Text>
          <Text style={style.nutriCirclesNumber}>{calories}</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={style.nutriCircles} underlayColor="red">
        <View>
          <Text style={style.nutriCirclesText}>Prot.</Text>
          <Text style={style.nutriCirclesNumber}>{proteins}g.</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={style.nutriCircles} underlayColor="red">
        <View>
          <Text style={style.nutriCirclesText}>Gras.</Text>
          <Text style={style.nutriCirclesNumber}>{fat}g.</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight style={style.nutriCircles} underlayColor="red">
        <View>
          <Text style={style.nutriCirclesText}>Carb.</Text>
          <Text style={style.nutriCirclesNumber}>{carbs}g.</Text>
        </View>
      </TouchableHighlight>
    </>
  );
};

export default NutritionCircles;
