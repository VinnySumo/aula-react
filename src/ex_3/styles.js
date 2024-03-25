import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fafafa',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        padding: 20,
    },  

    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    botao: {
        width: '30%',
        padding: 10,
        margin: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent:'center',
        borderRadius: 20,
    },

    txtbotao: {
        fontSize: 25,
        color: '#fafafa',
    },

});

export default styles;