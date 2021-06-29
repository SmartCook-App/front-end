import { StyleSheet} from 'react-native';

const HomeStyle = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
    },
    image: {
      flex: 1,
      justifyContent: "center",
    },
    child: {
      flex: 1,
      backgroundColor: 'rgba(109,108,108,0.41)'
    },
    childtwo:{
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.57)'
    },
    title: {
      color: "#FAB73D",
      fontFamily: 'nunito-black',
      fontSize: 40,
      textAlign: "center",
    },
    subtitle: {
      color: "white",
      fontFamily: 'nunito-semiBold',
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    text: {
      fontFamily: 'nunito-light',
      fontSize: 20,
      textAlign: "center",
      color: '#DADADA'
    },
    rectanguleContainer: {
      height: 160,
      width: 340,
      backgroundColor: 'rgba(52, 52, 52, 0.07)',
      borderWidth: 1,
      borderColor: '#959595', 
      zIndex: 99,
      top: '5%',
      left: '9%',
      borderRadius: 7
    },
    containerFooter: {
      flex: 1,
      top: '40%',
    },
    scroller: {
      flex: 1,
    },
    textFooter: {
      fontFamily: 'nunito-light',
      fontSize: 21,
      textAlign: "center",
      top: '10%',
      color: '#FFFFFF'
    },
    textLater: {
      top: '8%',
      fontSize: 18,
      color: '#DADADA'
    },
    icons: {
      borderRadius: 45,
      width: 90,
      height:90,
      padding: 10,
    backgroundColor: 'white',
    },
    buttonsLogin: {
      padding: 25,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: "space-evenly",
    },

  });

export default HomeStyle;