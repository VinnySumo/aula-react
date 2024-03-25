import { View, Text, TouchableOpacity, Alert } from 'react-native'; 
import { useState } from 'react';

import styles from './styles';

export default function Exemplo3 () { 

    const [numero, setNumero] = useState(0);

    function mensagem() {
        alert('Clicou no botão');
    }
    function incrementar() {
        setNumero(numero + 1);
    }


    return(
        <View style={styles.container}>


            <Text style={styles.titulo}>Exemplo 3</Text>
                <TouchableOpacity style={styles.botao} onPress={() =>  mensagem()}>
                    <Text style={styles.txtbotao}>Botao</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{numero}</Text>
                <TouchableOpacity style={styles.botao} onPress={() => incrementar()}>
                    <Text style={styles.txtbotao}>adicionar nº</Text>
                </TouchableOpacity>

        </View>
    );
}
