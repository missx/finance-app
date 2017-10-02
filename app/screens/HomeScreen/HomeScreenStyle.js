import { StyleSheet } from 'react-native';
import { textPrimaryColor } from '../../config/commonStyle/colors';

const styles = StyleSheet.create({
    homeScreen: {
        flex: 1,
        flexDirection: 'column',
		backgroundColor: '#fff',
    },
    gastosTxt: {
        fontSize: 20,
		alignSelf: 'center'            
    },
    formView: {
        flex: 1,
        padding: 20
    },
    commonText: {
        color: textPrimaryColor
    },
    btn: {
        backgroundColor: "#388697"
    },
    
});

export default styles;
