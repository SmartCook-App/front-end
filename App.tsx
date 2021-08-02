import "react-native-gesture-handler";
import React, { FC } from "react";
import useCachedResources from "./hooks/useCachedResources";
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { NavigationContainer } from "@react-navigation/native";
import { MenuProvider } from "react-native-popup-menu";
import MainNavigator from "./navigation/MainNavigator";

const App: FC = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <MenuProvider>
            <MainNavigator />
          </MenuProvider>
        </NavigationContainer>
      </Provider>
    );
  }
};

export default App;
