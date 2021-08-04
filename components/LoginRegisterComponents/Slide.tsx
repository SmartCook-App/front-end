import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import LRL from "../../assets/Languages/LoginRegisterLanguage";

// const state = useSelector((state: RootState) => state);
// export default [
//   {
//     id: "1",
//     title: LRL[state.language]?.slideTitle1,
//     description: LRL[state.language]?.slideDescription1,
//     image: require("../../assets/Images/LoginImg/facebook.png"),
//   },
//   {
//     id: "2",
//     title: LRL[state.language]?.slideTitle2,
//     description: LRL[state.language]?.slideDescription2,
//     image: require("../../assets/Images/LoginImg/facebook.png"),
//   },
//   {
//     id: "3",
//     title: LRL[state.language]?.slideTitle3,
//     description: LRL[state.language]?.slideDescription3,
//     image: require("../../assets/Images/LoginImg/facebook.png"),
//   },
//   {
//     id: "4",
//     title: LRL[state.language]?.slideTitle4,
//     description: LRL[state.language]?.slideDescription4,
//     image: require("../../assets/Images/LoginImg/facebook.png"),
//   },
// ];
export default [
  {
    id: "1",
    title: "Dale variedad a tu alimentación",
    description:
      "Con SmartCook podrás alimentarte con platos variados en base a lo que tienes en casa",
    image: require("../../assets/Images/LoginImg/facebook.png"),
  },
  {
    id: "2",
    title: "Ahorra tiempo y energía",
    description:
      "Gracias a que la app es automatizada no tendrás que hacer los labores tediosos de la casa, nosotros nos encargamos de eso! ",
    image: require("../../assets/Images/LoginImg/facebook.png"),
  },
  {
    id: "3",
    title: "Ahorra dinero",
    description: "Optimiza el dinero empleado en las compras de supermercado",
    image: require("../../assets/Images/LoginImg/facebook.png"),
  },
  {
    id: "4",
    title: "Sigue y dale like",
    description:
      "Crea una red de amigos para poder ver sus recetas y comentarios!",
    image: require("../../assets/Images/LoginImg/facebook.png"),
  },
];
