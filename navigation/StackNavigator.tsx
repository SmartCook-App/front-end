import React, { FC } from 'react';
import MLRL from '../screens/LoginRegister/MainLoginRegister/MainLoginRegisterLanguages';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
import { createStackNavigator } from '@react-navigation/stack';
import MainLoginRegisterScreen from '../screens/LoginRegister/MainLoginRegister/MainLoginRegisterScreen';
import LoginRegisterScreen from '../screens/LoginRegister/LoginRegister/LoginRegisterScreen';
import RecipesHomeScreen from '../screens/Recipes/RecipesHome/RecipesHomeScreen';
import ProfileScreen from '../screens/Profile/Profile/ProfileScreen';
import EditProfileScreen from '../screens/Profile/EditProfile/EditProfileScreen';
import StepsRecipesScreen from '../screens/Recipes/RecipesSteps/RecipesStepsScreen';
import RecipeDetailsScreen from '../screens/Recipes/RecipeDetails/RecipeDetailsScreen';
import SearchRecipesScreen from '../screens/Recipes/SearchRecipes/SearchRecipesScreen';
import SearchIngredientScreen from '../screens/Recipes/SearchIngredient/SearchIngredientScreen';
import ChooseIngredientScreen from '../screens/Recipes/ChooseIngredient/ChooseIngredientScreen';
import ShoppingListScreen from '../screens/ShoppingList/ShoppingListScreen';
import CalendarScreen from '../screens/Calendar/CalendarIndexScreen.tsx/CalendarScreen';
import RecipeMatchScreen from '../screens/Recipes/RecipesMatch/RecipesMatchScreen';

type RootStackParamList = {
  MainLoginRegisterScreen: undefined;
  LoginRegisterScreen: undefined;
  RecipesHomeScreen: undefined;
  RecipeDetailsScreen: undefined;
  SearchRecipesScreen: undefined;
  ProfileScreen: undefined;
  StepsRecipesScreen: undefined;
  EditProfileScreen: undefined;
  ShoppingListScreen: undefined;
  SearchIngredientScreen: undefined;
  CalendarScreen: undefined;
  ChooseIngredientScreen: undefined;
  RecipeMatchScreen: undefined;
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
        name="RecipesHomeScreen"
        component={RecipesHomeScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="RecipeDetailsScreen"
        component={RecipeDetailsScreen}
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
        name="RecipesHomeScreen"
        component={RecipesHomeScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="RecipeDetailsScreen"
        component={RecipeDetailsScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="SearchRecipesScreen"
        component={SearchRecipesScreen}
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
        name="StepsRecipesScreen"
        component={StepsRecipesScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="RecipeMatchScreen"
        component={RecipeMatchScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
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
    <RootStack.Navigator initialRouteName="RecipesHomeScreen">
      <RootStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="EditProfileScreen"
        component={EditProfileScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="RecipeDetailsScreen"
        component={RecipeDetailsScreen}
        options={{
          title: 'MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="StepsRecipesScreen"
        component={StepsRecipesScreen}
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
      initialRouteName="ShoppingListScreen"
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
      <RootStack.Screen
        name="RecipeDetailsScreen"
        component={RecipeDetailsScreen}
        options={{
          title: 'MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="StepsRecipesScreen"
        component={StepsRecipesScreen}
        options={{
          title: ' MLRL[lang]?.appName',
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};
