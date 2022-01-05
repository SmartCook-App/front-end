import React, { FC } from "react";
import { Text, View } from "react-native";
import styles from "./MainLoginRegisterStyles";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import MLRL from "./MainLoginRegisterLanguages";
import BackgroundImage from "../../../components/LoginRegister/BackgroundImage/BackgroundImageComponent";
import ButtonLoginEmail from "../../../components/LoginRegister/MainLoginRegister/ButtonLoginEmail/ButtonLoginEmailComponent";
import IconFacebookGoogle from "../../../components/LoginRegister/MainLoginRegister/IconFacebookGoogle/IconFacebookGoogleComponent";
import KnowMore from "../../../components/LoginRegister/MainLoginRegister/KnowMore/KnowMoreComponent";

interface Props {
  navigation: any;
}

const LoginRegister: FC<Props> = (props: Props) => {
  const { navigation } = props;
  const lang = useSelector<RootState, RootState["language"]>(
    (state) => state.language
  );

  return (
    <View style={styles.container}>
      <BackgroundImage>
        <View>
          <Text style={styles.title}>{MLRL[lang]?.appName}</Text>
          <Text style={styles.subtitle}>{MLRL[lang]?.slogan}</Text>
          <View>
          <View style={styles.carousel}>
              <KnowMore/>
            </View>
          </View>
        </View>
        <View style={styles.containerFooter}>
          <ButtonLoginEmail
            content={MLRL[lang]?.buttonEmail}
            navigation={navigation}
          ></ButtonLoginEmail>
          <View style={styles.rectanguleContainer}>
            <Text style={styles.textFooter}>{MLRL[lang]?.conectWith}</Text>
            <View style={styles.buttonsLogin}>
              <IconFacebookGoogle
                imageIcon={"facebook"}
                navigation={navigation}
              />
              <IconFacebookGoogle
                imageIcon={"google"}
                navigation={navigation}
              />
            </View>
          </View>
          <Text
            style={[styles.textFooter, styles.textLater]}
            onPress={() => navigation.navigate("RecipesHomeScreen")}
          >
            {MLRL[lang]?.signInLater}
          </Text>
        </View>
      </BackgroundImage>
    </View>
  );
};
export default LoginRegister;
