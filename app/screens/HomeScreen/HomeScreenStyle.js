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
    logoView: {
        flex: 1,
        justifyContent: 'center',
		alignItems: 'center'    
    },
    formView: {
        flex: 1
    },
    commonText: {
        color: textPrimaryColor
    },
    btn: {
        backgroundColor: "#388697"
    },
    logo: {
        height: 150,
        width: 150,
        justifyContent: 'center'
        
    },
    
});

export default styles;
