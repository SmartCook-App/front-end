import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import {
  RecepiesStackNavigator,
  // ListStackNavigator,
  // CalendaryStackNavigator,
  // SearchStackNavigator,
  // ProfileStackNavigator,
} from "./StackNavigator";
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
      <Tab.Screen
        name="Recepies"
        component={RecepiesStackNavigator}
        options={{
          tabBarLabel: "Recetas",
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      />
      {/* <Tab.Screen
        name="List"
        component={ListStackNavigator}
        options={{
          tabBarLabel: "Lista",
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Calendary"
        component={CalendaryStackNavigator}
        options={{
          tabBarLabel: "Calendario",
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchStackNavigator}
        options={{
          tabBarLabel: "Buscador",
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackNavigator}
        options={{
          tabBarLabel: "Perfil",
          tabBarColor: "black",
          tabBarIcon: ({ color }) => (
            <Ionicons name="ios-person" color={color} size={26} />
          ),
        }}
      /> */}
    </Tab.Navigator>
  );
};
