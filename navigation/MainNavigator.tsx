import React, { FC } from "react";
import { useSelector } from "react-redux";
import { UserAuthState } from "../redux/types/userAuthTypes";
import { MainPageStackNavigator } from "./StackNavigator";
import { TabNavigator } from "../navigation/TabNavigator";
import { State } from "react-native-gesture-handler";
import { RootState } from "../redux/store";

const MainNavigator: FC = () => {
  const state = useSelector((state: RootState) => state);
  return (
    <>
      {!state.userAuth.id || state.userAuth.registerUserAuthStatus.success ? (
        <> 
        <TabNavigator />
          {/* <MainPageStackNavigator /> */}
        </>
      ) : (
        <TabNavigator />
      )}
    </>
  );
};

export default MainNavigator;
