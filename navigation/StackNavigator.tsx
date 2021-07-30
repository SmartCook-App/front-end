import React, { FC } from "react";
import LRL from "../assets/Languages/LoginRegisterLanguage";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import LoginRegisterScreen from "../screens/LoginRegister/LoginRegisterScreen";
import SettingScreens from "../screens/SettingScreens";

type RootStackParamList = {
  LoginRegisterScreen: undefined;
  SettingScreens: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const MainPageStackNavigator: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "blue" },
        headerTintColor: "red",
      }}
    >
      <RootStack.Screen
        name="LoginRegisterScreen"
        component={LoginRegisterScreen}
        options={{
          title: LRL[lang]?.appName,
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
      initialRouteName="SettingScreens"
      screenOptions={{
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "red",
        headerTitleStyle: { fontWeight: "bold" },
      }}
    >
      <RootStack.Screen
        name="SettingScreens"
        component={SettingScreens}
        options={{
          title: "Hola que tal settings",
        }}
      />
    </RootStack.Navigator>
  );
};
