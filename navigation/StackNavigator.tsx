import React, { FC } from "react";
import LRL from "../assets/Languages/LoginRegisterLanguage";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { createStackNavigator } from "@react-navigation/stack";
import LoginRegister from "../screens/LoginRegister/LoginRegister";
import Colors from "../assets/Colors";

type RootStackParamList = {
  LoginRegisterScreen: undefined;
};

const RootStack = createStackNavigator<RootStackParamList>();

export const MainPageStackNavigator: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  return (
    <RootStack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: Colors.colorPrimary },
        headerTintColor: Colors.textColorPrimary,
      }}
    >
      <RootStack.Screen
        name="HomeScreen"
        component={LoginRegister}
        options={{
          title: LRL[lang]?.appName,
        }}
      />
    </RootStack.Navigator>
  );
};
