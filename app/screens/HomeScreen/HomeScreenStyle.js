import { StyleSheet } from 'react-native';
import { textPrimaryColor } from '../../config/commonStyle/colors';

const styles = StyleSheet.create({
    gastosTxt: {
        fontSize: 20,
    },
    homeScreen: {
        flex: 1,
        flexDirection: 'column'
    },
    logoView: {
        flex: 1
    },
    formView: {
        flex: 1
    },
    commonText: {
        color: textPrimaryColor
    }
});

export default styles;
