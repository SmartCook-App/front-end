
import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useBottomTabBarHeight } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import IoniconsComponent from '../components/HomeComponents/IoniconsComponent';
import Colors from '../assets/Colors';
import {
  RecepiesStackNavigator,
  // ListStackNavigator,
  // CalendaryStackNavigator,
  // SearchStackNavigator,
  // ProfileStackNavigator,
} from './StackNavigator';
const Tab = createMaterialBottomTabNavigator();
export const TabNavigator: FC = () => {
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  return (
    <Tab.Navigator
      initialRouteName="Recepies"
      activeColor="#ffffff"
      inactiveColor="#000000"
      sceneAnimationEnabled={false}
      shifting={true}
    >
      <Tab.Screen
        name="Recepies"
        component={RecepiesStackNavigator}
        options={{
          tabBarLabel: 'Recetas',
          tabBarColor: Colors.light.navbarColor,
          tabBarIcon: () => <IoniconsComponent name="home-outline" />,

        }}
      />
      <Tab.Screen
        name="List"
        component={RecepiesStackNavigator}
        options={{
          tabBarLabel: 'Lista',
          tabBarColor: Colors.light.navbarColor,
          tabBarIcon: () => <IoniconsComponent name="list-outline" />,
        }}
      />
      <Tab.Screen
        name="Calendary"
        component={RecepiesStackNavigator}
        options={{
          tabBarLabel: 'Calendario',
          tabBarColor: Colors.light.navbarColor,
          tabBarIcon: () => <IoniconsComponent name="calendar-outline" />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={RecepiesStackNavigator}
        options={{
          tabBarLabel: 'Buscador',
          tabBarColor: Colors.light.navbarColor,
          tabBarIcon: () => <IoniconsComponent name="search-outline" />,
        }}
      />
    </Tab.Navigator>
  );
};
