import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Mensagem from './src/ex_2'; exemplo2

  //import Atividade1 from './src/1'; //atividade 1
  import Atividade3 from './src/3'; //atividade 3

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade3/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#90CAF9',
    padding: 18,
    alignItems: 'center',
  },
});
