import { StyleSheet } from 'react-native';
import { normalizePx, normalizeFontSize } from '../../../styles/normalize';

const MatchStyle = StyleSheet.create({
    container:{
        flex: 1
    },
    matchText: {
        fontSize: normalizeFontSize(20),
        fontFamily: 'nunito-semiBold',
        marginTop: normalizePx(40),
        alignSelf: 'center',
    },
    containerRecipes: {
        marginRight: normalizePx(20),
        flex: 2,
    },
});
export default MatchStyle;
