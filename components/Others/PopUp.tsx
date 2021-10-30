import { Alert} from "react-native";


const PopUp = () => {
    Alert.alert(
      "Alert title",
      "My alert Message",
      [
        {
          text: "Ok",
          onPress: () => console.log("OK")
        }
      ]
    )
    }
export default PopUp;
