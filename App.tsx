import "react-native-gesture-handler";
import React, { FC } from "react";
import useCachedResources from "./hooks/useCachedResources";
import { NavigationContainer } from "@react-navigation/native";
import { MenuProvider } from "react-native-popup-menu";
import MainNavigator from "./navigation/MainNavigator";

const App: FC = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <NavigationContainer>
        <MenuProvider>
          <MainNavigator />
        </MenuProvider>
      </NavigationContainer>
    );
  }
};

export default App;
