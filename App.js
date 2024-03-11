import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
//import Mensagem from './src/ex_2'; exemplo2

  import Atividade1 from './src/1'; //atividade 1

export default function App() {
  return (
    <View style={styles.container}>
      <Atividade1/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#90CAF9',
    padding: 8,
    //alignItems: 'center',
  },
});
