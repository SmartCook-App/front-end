import React, { FC } from "react";
import LRL from "../assets/Languages/LoginRegisterLanguage";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import MainLoginRegisterScreen from "../screens/LoginRegister/MainLoginRegisterScreen";
import LoginRegisterScreen from "../screens/LoginRegister/LoginRegisterScreen";
import IndexScreen from "../screens/Home/IndexScreen";
import ShoppingListScreen from "../screens/ShoppingListScreen";

type RootStackParamList = {
  MainLoginRegisterScreen: undefined;
  LoginRegisterScreen: undefined;
  IndexScreen: undefined;
  ShoppingListScreen: undefined;
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
    </RootStack.Navigator>
  );
};

export const ShoppingListStackNavigator: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  return (
    <RootStack.Navigator
      initialRouteName="IndexScreen"
      // screenOptions={{
      //   headerStyle: { backgroundColor: Colors.colorPrimary },
      //   headerTintColor: Colors.textColorPrimary,
      //   headerTitleStyle: { fontWeight: 'bold' },
      // }}
    >
      <RootStack.Screen
        name="ShoppingListScreen"
        component={ShoppingListScreen}
        // options={{
        //   title: "Shopping List", Parametrizar este texto con Languages.
        // }}
      />
    </RootStack.Navigator>
  );
};
