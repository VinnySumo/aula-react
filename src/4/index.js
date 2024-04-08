import { View, Text, TextInput, Pressable } from "react-native";
import { useState } from "react";

import styles from './styles';




export default function Atividade4 () {
    
    const [txt2, setTxt2] = useState ('');
    const [txt3, setTxt3] = useState ('');
    const [txttela, setTxtTela] = useState ('Insira seu nome aqui');
    const [txttela1, setTxtTela1] = useState ('');
    

    function exibirtextoHandle(){
        setTxtTela(txt2);
        setTxtTela1(txt3);
        setTxt2('');
        setTxt3('');

    }
    
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Atividade 4</Text>   

            <View style={styles.texto}>{txttela} {txttela1} </View>


            
            <Text style={styles.nome}>Nome</Text>

            <TextInput 
            style={styles.input}
            onChangeText={(vlr) => setTxt2(vlr)}
            value={txt2}
            />

            <Text style={styles.nome1}>Sobrenome</Text>
            <TextInput 
            style={styles.input2}
            onChangeText={(vlr) => setTxt3(vlr)}
            value={txt3}
            />

            


               <Pressable style={({ pressed }) => pressed ? [styles.botao, styles.botaopress] : styles.botao} 
            onPress={() => exibirtextoHandle()}>
                <Text style={styles.txtbotao}>Exibir texto</Text>
            </Pressable>

        </View>
    )
}