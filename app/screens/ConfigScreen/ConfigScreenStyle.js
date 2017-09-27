import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    configScreen: {
        backgroundColor: '#fff',
        flex: 1
    },

    categoryTitle: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    modal: {
        backgroundColor: 'white',
        padding: 22,
        marginTop: 22,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        borderColor: 'rgba(0, 0, 0, 0.1)'
    },

    modalButton: {
        marginTop: 3,
        marginBottom: 3
    }
});

export default styles;