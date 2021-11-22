import React, { FC } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import styles from '../../styles/HomeStyles';
import { normalizePx } from '../../styles/normalize';
import Colors from '../../assets/Colors';

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
      <TouchableHighlight
        style={NutritionCircleStyle.nutriCircles}
        underlayColor="red"
      >
        <View>
          <Text style={NutritionCircleStyle.nutriCirclesText}>Cal.</Text>
          <Text style={NutritionCircleStyle.nutriCirclesNumber}>
            {calories}
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={NutritionCircleStyle.nutriCircles}
        underlayColor="red"
      >
        <View>
          <Text style={NutritionCircleStyle.nutriCirclesText}>Prot.</Text>
          <Text style={NutritionCircleStyle.nutriCirclesNumber}>
            {proteins}g.
          </Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={NutritionCircleStyle.nutriCircles}
        underlayColor="red"
      >
        <View>
          <Text style={NutritionCircleStyle.nutriCirclesText}>Gras.</Text>
          <Text style={NutritionCircleStyle.nutriCirclesNumber}>{fat}g.</Text>
        </View>
      </TouchableHighlight>
      <TouchableHighlight
        style={NutritionCircleStyle.nutriCircles}
        underlayColor="red"
      >
        <View>
          <Text style={NutritionCircleStyle.nutriCirclesText}>Carb.</Text>
          <Text style={NutritionCircleStyle.nutriCirclesNumber}>{carbs}g.</Text>
        </View>
      </TouchableHighlight>
    </>
  );
};

export default NutritionCircles;

const NutritionCircleStyle = StyleSheet.create({
  nutriCirclesContainer: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: normalizePx(40),
    paddingVertical: normalizePx(30),
    justifyContent: 'space-between',
  },
  nutriCircles: {
    borderRadius: normalizePx(50),
    width: normalizePx(70),
    height: normalizePx(70),
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C4C4C4',
    borderWidth: normalizePx(2),
  },
  nutriCirclesText: {
    color: Colors.light.white,
  },
  nutriCirclesNumber: {
    color: Colors.light.yellow,
    fontWeight: 'bold',
  },
});
