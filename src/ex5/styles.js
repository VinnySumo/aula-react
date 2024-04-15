import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container: {
    flex: 1, 
   backgroundColor: '#ffcdd2',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 8,
    borderRadius: 20,
   
},  

titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#b71c1c',
    margin: 20,
    marginBottom: 40,
},

txtsaida: {
    margin: 6,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#E91E63',
},

txtentrada: {
   borderWidth: 4,
    //fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    borderColor: '#E91E63',
    color: '#e53935',

},



});

export default styles;