import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import MLRL from "../../screens/LoginRegister/MainLoginRegister/MainLoginRegisterLanguages";

const state = useSelector((state: RootState) => state);

export default [
  {
    id: "1",
    title: MLRL[state.language]?.slideTitle1,
    description: MLRL[state.language]?.slideDescription1,
    image: require("../../assets/Images/LoginImg/facebook.png"),
  },
  {
    id: "2",
    title: MLRL[state.language]?.slideTitle2,
    description: MLRL[state.language]?.slideDescription2,
    image: require("../../assets/Images/LoginImg/facebook.png"),
  },
  {
    id: "3",
    title: MLRL[state.language]?.slideTitle3,
    description: MLRL[state.language]?.slideDescription3,
    image: require("../../assets/Images/LoginImg/facebook.png"),
  },
  {
    id: "4",
    title: MLRL[state.language]?.slideTitle4,
    description: MLRL[state.language]?.slideDescription4,
    image: require("../../assets/Images/LoginImg/facebook.png"),
  },
];
