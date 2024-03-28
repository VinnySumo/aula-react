import { View, Text, TouchableOpacity, Alert } from 'react-native'; 
import { useState } from 'react';

import styles from './styles';

export default function atividade3 () { 

    const [numero, setNumero] = useState(0);

    function diminuir() {
        setNumero(numero - 1);
    }
    function aumentar() {
        setNumero(numero + 1);
    }
    function zerar() {
        setNumero(0);
    }



    return(
        <View style={styles.container}>


            <Text style={styles.titulo}>Atividade 3</Text>

            <View style={styles.container1}>
                <TouchableOpacity style={styles.botao} onPress={() =>  aumentar()}>
                    <Text style={styles.txtbotao}>+</Text>
                </TouchableOpacity>

                <Text style={styles.titulo}>{numero}</Text>
                <TouchableOpacity style={styles.botao} onPress={() => diminuir()}>
                    <Text style={styles.txtbotao}>-</Text>
                </TouchableOpacity>
                </View>

               <View style={styles.container2}>
               
                <TouchableOpacity style={styles.botao} onPress={() => zerar()}>
                    <Text style={styles.txtbotao}>zerar</Text>
                </TouchableOpacity>
                </View>
                
        </View>
    );
}
