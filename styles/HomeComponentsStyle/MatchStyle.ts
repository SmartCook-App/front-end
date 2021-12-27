import { StyleSheet } from 'react-native';
import Colors from '../../assets/Colors';
import { normalizePx, normalizeFontSize } from '../../styles/normalize';

const MatchStyle = StyleSheet.create({
    matchText: {
        fontSize: normalizeFontSize(20),
        fontFamily: 'nunito-semiBold',
        marginTop: normalizePx(40),
    },
    containerView: {
        alignItems: 'center',
        alignContent: 'center',
    },
    containerRecipies: {
        marginRight: normalizePx(20)
    },
});
export default MatchStyle;
