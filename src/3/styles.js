import { StyleSheet } from 'react-native';
import { inline } from 'react-native-web/dist/cjs/exports/StyleSheet/compiler';

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        backgroundColor: '#fafafa',
        width: '100%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
    
    },  

    container1: {
        //flex: 1,
        flexDirection: 'row',
        borderRadius: 20,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-around',
        //borderWidth:3,
        marginTop: 20,
    },  

      

    botaocontainer:{
        width: '30%',

 
    },



    titulo: {
        fontSize: 30,
        fontWeight: 'bold',
    },

    botao: {
        width: '80%',
        padding: 10,
        margin: 20,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
       
    },

    txtbotao: {
        fontSize: 25,
        color: '#fafafa',
        
    },

});

export default styles;