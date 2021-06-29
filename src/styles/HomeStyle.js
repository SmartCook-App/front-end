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
      backgroundColor: 'rgba(109,108,108,0.81)'
    },
    childtwo:{
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.42)'
    },
    title: {
      color: "#FAB73D",
      fontFamily: 'nunito-black',
      fontSize: 40,
      fontWeight: "bold",
      textAlign: "center",
    },
    subtitle: {
      color: "white",
      fontFamily: 'nunito-semiBold',
      fontSize: 20,
      fontWeight: "bold",
      textAlign: "center",
    },
    knowMore: {
      fontFamily: 'nunito-light',
      fontSize: 20,
    }
  });

export default HomeStyle;