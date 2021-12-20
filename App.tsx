import "react-native-gesture-handler";
import React, { FC } from "react";
import useCachedResources from "./hooks/useCachedResources";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { NavigationContainer } from "@react-navigation/native";
import { MenuProvider } from "react-native-popup-menu";
import MainNavigator from "./navigation/MainNavigator";
import { Provider as PaperProvider } from "react-native-paper";

const App: FC = () => {
  const isLoadingComplete = useCachedResources();
  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <PaperProvider>
          <NavigationContainer>
            <MenuProvider>
              <MainNavigator />
            </MenuProvider>
          </NavigationContainer>
        </PaperProvider>
      </Provider>
    );
  }
};

export default App;
