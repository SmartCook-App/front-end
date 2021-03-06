import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import IoniconsComponent from '../components/TabNavigator/IoniconsComponent';
import Colors from '../assets/Colors';
import { normalizePx } from '../styles/normalize';
import {
  RecepiesStackNavigator,
  AccountStackNavigator,
  ShoppingListStackNavigator,
  CalendarStackNavigator,
} from './StackNavigator';

const Tab = createMaterialBottomTabNavigator();

export const TabNavigator: FC = () => {
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  return (
    <Tab.Navigator
      initialRouteName="Recepies"
      activeColor={Colors.light.yellow}
      inactiveColor="#000000"
      sceneAnimationEnabled={false}
      shifting={true}
      barStyle={{
        height: normalizePx(70),
        backgroundColor: Colors.light.navbarColor,
        marginBottom: 2,
      }}
    >
      <Tab.Screen
        name="Recepies"
        component={RecepiesStackNavigator}
        options={{
          tabBarLabel: 'Recetas',
          tabBarIcon: () => <IoniconsComponent name="home-outline" />,
        }}
      />
      <Tab.Screen
        name="List"
        component={ShoppingListStackNavigator}
        options={{
          tabBarLabel: 'Lista',
          tabBarColor: Colors.light.navbarColor,
          tabBarIcon: () => <IoniconsComponent name="list-outline" />,
        }}
      />
      <Tab.Screen
        name="Calendary"
        component={CalendarStackNavigator}
        options={{
          tabBarLabel: 'Calendario',
          tabBarIcon: () => <IoniconsComponent name="calendar-outline" />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AccountStackNavigator}
        options={{
          tabBarColor: Colors.light.navbarColor,
          tabBarIcon: () => <IoniconsComponent name="person-outline" />,
        }}
      />
    </Tab.Navigator>
  );
};
