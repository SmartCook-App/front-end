import React, { FC } from "react";
import LRL from "../assets/Languages/LoginRegisterLanguage";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import MainLoginRegisterScreen from "../screens/LoginRegister/MainLoginRegisterScreen";
import LoginRegisterScreen from "../screens/LoginRegister/LoginRegisterScreen";
import IndexScreen from "../screens/Home/IndexScreen";
import AccountScreen from "../screens/Profile/AccountScreen";
import ConfigProfileScreen from "../screens/Profile/ConfigProfileScreen";
import StepsRecipiesScreen from "../screens/Recipies/StepsRecipiesScreen";
import RecipieHome from "../screens/Home/RecipieHome";

type RootStackParamList = {
  MainLoginRegisterScreen: undefined;
  LoginRegisterScreen: undefined;
  IndexScreen: undefined;
  RecipieHome: undefined;
  Account: undefined;
  StepsRecipiesScreen: undefined;
  ConfigProfileScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const MainPageStackNavigator: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "yellow" },
        headerTintColor: "white",
      }}
    >
      <RootStack.Screen
        name="MainLoginRegisterScreen"
        component={MainLoginRegisterScreen}
        options={{
          title: LRL[lang]?.appName,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="LoginRegisterScreen"
        component={LoginRegisterScreen}
        options={{
          title: LRL[lang]?.appName,
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="IndexScreen"
        component={IndexScreen}
        options={{
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="RecipieHome"
        component={RecipieHome}
        options={{
          title: " LRL[lang]?.appName",
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export const RecepiesStackNavigator: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "yellow" },
        headerTintColor: "white",
      }}
    >
      <RootStack.Screen
        name="IndexScreen"
        component={IndexScreen}
        options={{
          title: " LRL[lang]?.appName",
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="RecipieHome"
        component={RecipieHome}
        options={{
          title: " LRL[lang]?.appName",
          headerShown: false,
        }}
      />
      <RootStack.Screen
        name="StepsRecipiesScreen"
        component={StepsRecipiesScreen}
        options={{
          title: " LRL[lang]?.appName",
          headerShown: false,
        }}
      />
    </RootStack.Navigator>
  );
};

export const AccountStackNavigator: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  return (
    <RootStack.Navigator
      initialRouteName="IndexScreen"
    >
      <RootStack.Screen
        name="Account"
        component={AccountScreen}
        options={{
          title: " LRL[lang]?.appName",
          headerShown: false,
        }}
      />
       <RootStack.Screen
        name="ConfigProfileScreen"
        component={ConfigProfileScreen}
        options={{
          title: " LRL[lang]?.appName",
          headerShown: false,
        }}

      />
    </RootStack.Navigator>
  );
};
