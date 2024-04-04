import { View, Text, TextInput, Pressable } from "react-native";

import styles from './styles';

import { useState, } from "react";



export default function exemplo4 () {

    const [txtDigitado, setTxtDigitado] = useState ('Texto Digitado');
    const [txt2, setTxt2] = useState ('');
    const [txttela, setTxtTela] = useState ('');


    function atualizaTextoHandle (txt){
        setTxtDigitado(txt);
    }

    function exibirtextoHandle(){
        setTxtTela(txt2);
        setTxt2('');
    }

    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Exemplo 4</Text>

            <Text style={styles.texto}>{txtDigitado}</Text>
            <TextInput style={styles.input} onChangeText={(valor) => atualizaTextoHandle(valor)}/>

            <View style={styles.linha}> </View>

            <View style={styles.texto}>{txttela} </View>
            
            <TextInput 
            style={styles.input}
            onChangeText={(vlr) => setTxt2(vlr)}
            value={txt2}
            />
            <Pressable style={({ pressed }) => pressed ? [styles.botao, styles.botaopress] : styles.botao} 
            onPress={() => exibirtextoHandle()}>
                <Text style={styles.txtbotao}>Exibir texto</Text>
            </Pressable>
            
        </View>
    )
}