import { StyleSheet } from "react-native";
import Colors from '../../../../assets/Colors';
import { normalizeFontSize, normalizePx } from "../../../../styles/normalize";

const TabBarStyle = StyleSheet.create({
    container: {
        marginTop: normalizePx(30),
        height: normalizePx(60),
        alignItems: "center",
        justifyContent: 'center',
        flexDirection: "row",
    },
    goBack: {
        fontSize: normalizePx(25),
        color: Colors.light.yellow,
        fontFamily: "nunito-black",
      },
    view: {
        flexDirection: "row",
    },
    touch:{
        marginRight: normalizePx(350),
    },
    kababMenu:{
        fontSize: normalizePx(30),
        transform: [{ rotate: '90deg'}],
        color: Colors.light.yellow
    },
    title: {
        color: Colors.light.yellow,
        fontSize: normalizeFontSize(16),
        fontFamily: "nunito-black",  
        position: "absolute",
        textTransform: 'uppercase',
      },
    line: {
        marginTop: 0.5,
        backgroundColor: Colors.light.lineUpperTitle,
        height: 0.4,
        width: normalizePx(420),
    },
});
export default TabBarStyle;