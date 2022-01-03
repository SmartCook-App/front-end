import React, { FC } from 'react';
import Colors from '../../../assets/Colors';
import { useSelector } from 'react-redux';
import { View, StyleSheet, ScrollView, Text } from 'react-native';
import TopBar from '../../../components/Others/TopNavbar';
import ML from './RecipieMatchLanguages';
import { RootState } from '../../../redux/store';
import RecipiesComponent from "../../../components/HomeComponents/recipiesComponent";
import styles from './RecipieMatchStyle';

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
            <TopBar
                title={ML[lang]?.topnavBarText}
                navigation={navigation}
                goBack={true}
            />
            <Text style={styles.matchText}>{ML[lang]?.match}</Text>
            <ScrollView style={styles.containerRecipies}>
                    <RecipiesComponent
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