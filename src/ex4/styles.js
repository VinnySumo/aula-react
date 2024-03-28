import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

container: {
    //flex: 1, 
   backgroundColor: '#ffcdd2',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 8,
    //borderRadius: 20,
   
},  

titulo: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#b71c1c',
    margin: 20,
    marginBottom: 40,
},


texto: {
    fontSize: 25,
    marginVertical: 10,
    padding: 5,
    color: '#b71c1c',

},

input: {
    fontSize: 25,
    width: '80%',
    textAlign: 'center',
    borderWidth: 3,
    borderColor: '#b71c1c',
    borderRadius: 20,
    padding: 5,
    
},

});

export default styles;