import React, { FC } from "react";
import { RootState } from "../redux/store";
import { connect } from "react-redux";
import { Text, View, ScrollView, SafeAreaView, StyleSheet } from "react-native";
import ChangeLanguage from "../components/SettingScreenComponents/ChangeLanguageComponent";

interface StateProps {
  lang: string;
}

interface Props extends StateProps {}

const SettingsScreen: FC<Props> = (props: Props) => {
  const { lang } = props;
  return (
    <SafeAreaView style={styles.mainContainer}>
      <ScrollView>
        <View style={styles.optionContainer}>
          <Text style={styles.optionTitle}>Configurar</Text>
          <ChangeLanguage />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const mapStateToProps = (state: RootState): StateProps => {
  return {
    lang: state.language,
  };
};

export default connect(mapStateToProps)(SettingsScreen);

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "blue",
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
