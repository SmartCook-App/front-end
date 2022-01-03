import React, { FC } from 'react';
import MLRL from '../screens/LoginRegister/MainLoginRegister/MainLoginRegisterLanguages';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import MainLoginRegisterScreen from '../screens/LoginRegister/MainLoginRegister/MainLoginRegisterScreen';
import LoginRegisterScreen from '../screens/LoginRegister/LoginRegister/LoginRegisterScreen';
import RecipieHomeScreen from '../screens/Recipies/RecipieHome/RecipieHomeScreen';
import ProfileScreen from '../screens/Profile/Profile/ProfileScreen';
import ConfigProfileScreen from '../screens/Profile/EditProfile/EditProfileScreen';
import StepsRecipiesScreen from '../screens/Recipies/RecipiesSteps/RecipiesStepsScreen';
import RecipieDetailsScreen from '../screens/Recipies/RecipieDetails/RecipieDetailsScreen';
import SearchRecipiesScreen from '../screens/Recipies/SearchRecipies/SearchRecipiesScreen';
import SearchIngredientScreen from '../screens/Recipies/SearchIngredient/SearchIngredientScreen';
import ChooseIngredientScreen from '../screens/Recipies/ChooseIngredient/ChooseIngredientScreen';
import ShoppingListScreen from '../screens/ShoppingList/ShoppingListScreen';
import CalendarScreen from '../screens/Calendar/CalendarIndexScreen.tsx/CalendarScreen';
import RecipieMatchScreen from '../screens/Recipies/RecipieMatch/RecipieMatchScreen';

type RootStackParamList = {
  MainLoginRegisterScreen: undefined;
  LoginRegisterScreen: undefined;
  RecipieHomeScreen: undefined;
  RecipieDetailsScreen: undefined;
  SearchRecipiesScreen: undefined;
  ProfileScreen: undefined;
  StepsRecipiesScreen: undefined;
  ConfigProfileScreen: undefined;
  ShoppingListScreen: undefined;
  SearchIngredientScreen: undefined;
  CalendarScreen: undefined;
  ChooseIngredientScreen: undefined;
  RecipieMatchScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const MainPageStackNavigator: FC = () => {
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'yellow' },
        headerTintColor: 'white',
      }}
    >
      <RootStack.Screen
        name="MainLoginRegisterScreen"
        component={MainLoginRegisterScreen}
        options={{
          title: MLRL[lang]?.appName,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="LoginRegisterScreen"
        component={LoginRegisterScreen}
        options={{
          title: MLRL[lang]?.appName,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="RecipieHomeScreen"
        component={RecipieHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="RecipieDetailsScreen"
        component={RecipieDetailsScreen}
        options={{
          title: 'MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export const RecepiesStackNavigator: FC = () => {
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'yellow' },
        headerTintColor: 'white',
      }}
    >
      <RootStack.Screen
        name="RecipieHomeScreen"
        component={RecipieHomeScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="RecipieDetailsScreen"
        component={RecipieDetailsScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SearchRecipiesScreen"
        component={SearchRecipiesScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SearchIngredientScreen"
        component={SearchIngredientScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="ChooseIngredientScreen"
        component={ChooseIngredientScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="StepsRecipiesScreen"
        component={StepsRecipiesScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="RecipieMatchScreen"
        component={RecipieMatchScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export const AccountStackNavigator: FC = () => {
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  return (
    <RootStack.Navigator initialRouteName="RecipieHomeScreen">
      <RootStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="ConfigProfileScreen"
        component={ConfigProfileScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export const ShoppingListStackNavigator: FC = () => {
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  return (
    <RootStack.Navigator
      initialRouteName="RecipieHomeScreen"
      // screenOptions={{
      //   headerStyle: { backgroundColor: Colors.colorPrimary },
      //   headerTintColor: Colors.textColorPrimary,
      //   headerTitleStyle: { fontWeight: 'bold' },
      // }}
    >
      <RootStack.Screen
        name="ShoppingListScreen"
        component={ShoppingListScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export const CalendarStackNavigator: FC = () => {
  const lang = useSelector<RootState, RootState['language']>(
    (state) => state.language
  );
  return (
    <RootStack.Navigator
      initialRouteName="CalendarScreen"
      screenOptions={{
        headerStyle: { backgroundColor: 'yellow' },
        headerTintColor: 'white',
      }}
    >
      <RootStack.Screen
        name="CalendarScreen"
        component={CalendarScreen}
        options={{
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
