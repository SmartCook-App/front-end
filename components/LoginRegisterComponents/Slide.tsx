import { useSelector } from 'react-redux'
import { RootState } from "../../redux/store";
import LRL from "../../assets/Languages/LoginRegisterLanguage";

const state =  useSelector((state: RootState)=> state);
export default [
    {
        id: "1",
        title: LRL[state.language]?.slideTitle1,
        description: LRL[state.language]?.slideDescription1,
        image: require('../../assets/Images/LoginImg/facebook.png')
    },
    {
        id: "2",
        title: LRL[state.language]?.slideTitle2,
        description: LRL[state.language]?.slideDescription2,
        image: require('../../assets/Images/LoginImg/facebook.png')
    },
    {
        id: "3",
        title: LRL[state.language]?.slideTitle3,
        description: LRL[state.language]?.slideDescription3,
        image: require('../../assets/Images/LoginImg/facebook.png')
    },
    {
        id: "4",
        title: LRL[state.language]?.slideTitle4,
        description: LRL[state.language]?.slideDescription4,
        image: require('../../assets/Images/LoginImg/facebook.png')
    },
];