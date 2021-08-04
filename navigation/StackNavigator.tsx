import React, { FC } from "react";
import LRL from "../assets/Languages/LoginRegisterLanguage";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import MainLoginRegisterScreen from "../screens/LoginRegister/MainLoginRegisterScreen";
import LoginRegisterScreen from "../screens/LoginRegister/LoginRegisterScreen";
import SettingScreens from "../screens/SettingScreens";
import SlideComponent from "../components/LoginRegisterComponents/SlideComponent";
import IndexScreen from "../screens/Home/IndexScreen";

type RootStackParamList = {
  MainLoginRegisterScreen: undefined;
  LoginRegisterScreen: undefined;
  IndexScreen: undefined;
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
