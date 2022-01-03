import React, { FC, useState, useRef } from "react";
import { View, Switch, Animated, StyleSheet } from "react-native";
import { RootState } from "../../redux/store";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as languageInteractor from "../../redux/interactors/languageInteractor";

interface StateProps {
  lang: string;
}

interface DispatchProps {
  setLanguageInteractor: typeof languageInteractor.setLanguageInteractor;
}

interface Props extends StateProps, DispatchProps {}

const ChangeLanguage: FC<Props> = ({ lang, setLanguageInteractor }) => {
  const [isEnglish, setIsEnglish] = useState<boolean>(
    lang === "ES" ? false : true
  );
  const spanishTextAnimation = useRef(
    new Animated.Value(isEnglish ? 1 : 1.3)
  ).current;
  const englishTextAnimation = useRef(
    new Animated.Value(isEnglish ? 1.3 : 1)
  ).current;

  const startAnimation = () => {
    if (isEnglish) {
      Animated.timing(spanishTextAnimation, {
        toValue: 1.3,
        duration: 400,
        useNativeDriver: true,
      }).start();
      Animated.timing(englishTextAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(spanishTextAnimation, {
        toValue: 1,
        duration: 400,
        useNativeDriver: true,
      }).start();
      Animated.timing(englishTextAnimation, {
        toValue: 1.3,
        duration: 400,
        useNativeDriver: true,
      }).start();
    }
  };

  const toggleSwitch = () => {
    startAnimation();
    setLanguageInteractor(lang === "ES" ? "EN" : "ES");
    setIsEnglish(!isEnglish);
  };

  return (
    <View style={styles.switchContainer}>
      <Animated.Text
        style={[
          styles.switchText,
          { transform: [{ scale: spanishTextAnimation }] },
        ]}
      >
        Español
      </Animated.Text>
      <Switch
        trackColor={{ false: "#767577", true: "#767577" }}
        thumbColor={isEnglish ? "#f4f3f4" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnglish}
      />
      <Animated.Text
        style={[
          styles.switchText,
          { transform: [{ scale: englishTextAnimation }] },
        ]}
      >
        English
      </Animated.Text>
    </View>
  );
};

const mapStateToProps = (state: RootState): StateProps => {
  return {
    lang: state.language,
  };
};

const mapDispatchToProps = (dispatch: any): DispatchProps => ({
  ...bindActionCreators(
    {
      ...languageInteractor,
    },
    dispatch
  ),
});

export default connect(mapStateToProps, mapDispatchToProps)(ChangeLanguage);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "red",
  },
  optionContainer: {
    flex: 0.3,
    padding: 8,
    marginHorizontal: 5,
    alignSelf: "stretch",
    marginTop: 8,
    backgroundColor: "red",
  },
  optionTitle: {
    fontSize: 17,
    color: "red",
  },
  switchContainer: {
    flex: 1,
    marginTop: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  switchText: {
    flex: 0.3,
    textAlign: "center",
    paddingHorizontal: 8,
    color: "red",
  },
});
