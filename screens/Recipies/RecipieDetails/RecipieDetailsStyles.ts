import { normalizeFontSize, normalizePx } from '../../../styles/normalize';
import { StyleSheet } from 'react-native';
import Colors from '../../../assets/Colors';

const RecipieDetailsStyles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: 'column',
      justifyContent: 'center',
    },
    photo: {
      flex: 1,
      resizeMode: 'stretch', // or 'cover'
      opacity: 3
    },
    centerText:{
      flex: 1,
    },
    changePortionButton:{
      height: normalizePx(70),
      width: normalizePx(70),
      borderRadius: normalizePx(40),
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: Colors.light.transparentYellow,
    },
    blackRectangule: {
      height: normalizePx(240),
      backgroundColor: Colors.light.transparentBlack,
    },
    whatYouNeedContainer:{
      padding: 5
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    alignLeft: {
      marginTop: normalizePx(50),
      marginBottom: normalizePx(25),
      left: normalizePx(240),
    },
    alignRight: {
      marginTop: normalizePx(50),
      marginBottom: normalizePx(30),
      left: normalizePx(20),
    },
    bottom: {
      height: normalizePx(170),
      marginTop: normalizePx(475),
    },
    info: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginTop: normalizePx(10),
      paddingHorizontal: normalizePx(10),
    },
    infoContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      paddingHorizontal: normalizePx(10),
    },
    infoText: {
      color: Colors.light.white,
      fontWeight: 'bold',
    },
    title: {
      paddingHorizontal: normalizePx(20),
      fontFamily: 'nunito-light',
      color: Colors.light.white,
      fontSize: normalizeFontSize(25),
    },
    seeRecipieDetailButton: {
      position: 'absolute',
      bottom: normalizePx(55),
      right: normalizePx(20),
      borderRadius: normalizePx(50),
      height: 70,
      width: 70,
      alignSelf:"center",
      padding:7,
      backgroundColor: Colors.light.transparentYellow,
    },
    goDownArrow: {
      alignItems: 'center',
      marginTop: normalizePx(100),
      // backgroundColor: Colors.light.transparentBlack,
    },
    iconsContainer: {
      width: normalizePx(140),
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },
    cookerContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingHorizontal: normalizePx(60),
      paddingVertical: normalizePx(15),
    },
    cookerAvatar: {
      backgroundColor: Colors.light.transparentBlack,
      marginVertical: 10
    },
    cookerInfoContainer: {
      flexDirection: 'column',
    },
    cookerInfo: {
      color: Colors.light.white,
      fontWeight: 'bold',
      fontSize: normalizeFontSize(12),
    },
    cookerVisitProfile: {
      color: Colors.light.white,
    },
    portions: {
      alignItems: 'center',
      flexDirection: 'row',
      padding: normalizePx(15),
      paddingHorizontal: normalizePx(110),
      justifyContent: 'space-between',
    },
    addPortionButton: {
      backgroundColor: Colors.light.yellow,
    },
    portionText: {
      color: Colors.light.white,
      fontWeight: 'bold',
      fontSize: normalizeFontSize(40),
      padding: 5,
    },
    nutriCirclesContainer: {
      alignItems: 'center',
      flexDirection: 'row',
      paddingHorizontal: normalizePx(40),
      paddingVertical: normalizePx(30),
      justifyContent: 'space-between',
    },
    nutriCircles: {
      borderRadius: normalizePx(50),
      width: normalizePx(70),
      height: normalizePx(70),
      justifyContent: 'center',
      alignItems: 'center',
      borderColor: '#C4C4C4',
      borderWidth: normalizePx(2),
    },
    nutriCirclesText: {
      color: Colors.light.white,
    },
    nutriCirclesNumber: {
      color: Colors.light.yellow,
      fontWeight: 'bold',
    },
    myNotesContainer: {
      flex: 1,
      minHeight: normalizePx(50),
      padding: normalizePx(15),
      backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    myNoteText: {
      color: 'white'
    }
  });
  
  export default RecipieDetailsStyles;