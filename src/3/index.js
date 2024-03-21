import { View, Text, TouchableOpacity, Alert } from 'react-native'; 

import styles from './styles';

export default function atividade3 () { 

    function mensagem() {
        alert('Parabens');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 3</Text>
                <TouchableOpacity style={styles.botao} onPress={mensagem}>
                    <Text style={styles.txtbotao}>Botao</Text>
                </TouchableOpacity>
        </View>
    );
}
