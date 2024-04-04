import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Mensagem from './src/ex_2'; exemplo2

  //import Atividade1 from './src/1'; //atividade 1
 // import Exemplo3 from './src/ex_3'; //exemplo 3
   // import Atividade3 from './src/3'; //atividade 3
   //import Exemplo4 from './src/ex4' //exemplo4;
   import Atividade4 from './src/4'; //atividade4
   

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade4/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'orange',
    padding: 18,
    alignItems: 'center',
  },
});
