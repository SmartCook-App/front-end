import React, { FC } from 'react';
import Colors from '../../../assets/Colors';
import { useSelector } from 'react-redux';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import TopNavbar from '../../../components/TopNavbar/TopNavbarComponent';
import ML from './RecipesMatchLanguages';
import { RootState } from '../../../redux/store';
import RecipesComponent from "../../../components/ShowAllRecipes/ShowAllRecipesComponent";
import styles from './RecipesMatchStyle';

interface Props {
  navigation: any;
}

const Match: FC<Props> = (props: Props) => {
    const {navigation} = props;
    const lang = useSelector<RootState, RootState['language']>(
        (state) => state.language
      );
    return (
        <View>
            <TopNavbar
                title={ML[lang]?.topnavBarText}
                navigation={navigation}
                goBack={true}
            />
            <Text style={styles.matchText}>{ML[lang]?.match}</Text>
            <ScrollView style={styles.containerRecipes}>
                    <RecipesComponent
                        name={"name"}
                        image={"image"}
                        cal={"cal"}
                        time={"time"}
                        navigation={navigation}
                    />
            </ScrollView>
        </View>
    );
};

export default Match;