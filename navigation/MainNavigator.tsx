import React, { FC } from "react";
import { bindActionCreators } from "redux";
import { MainPageStackNavigator } from "./StackNavigator";
import { TabNavigator } from "../navigation/TabNavigator";

const MainNavigator: FC = () => {
  return <>{false ? <MainPageStackNavigator /> : <TabNavigator />}</>;
};

// const mapStateToProps = (state: RootState): StateProps => {
//   return {
//     userAuth: state.userAuth,
//   };
// };

// const mapDispatchToProps = (dispatch: any): DispatchProps => ({
//   ...bindActionCreators(
//     {
//       ...userAuthInteractors,
//     },
//     dispatch
//   ),
// });

export default MainNavigator;
