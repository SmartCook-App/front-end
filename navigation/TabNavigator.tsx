import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
// import { AccountStackNavigator } from "./StackNavigator";
const Tab = createMaterialBottomTabNavigator();

export const TabNavigator: FC = () => {
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );
  return (
    <Tab.Navigator
      shifting={true}
      initialRouteName="Folders"
      activeColor="#fff"
      inactiveColor="#95a5a6"
      sceneAnimationEnabled={false}
    >
      {/* <Tab.Screen
        name="Account"
        component={AccountStackNavigator}
        options={{
          tabBarLabel: "hola registrarse?",
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
