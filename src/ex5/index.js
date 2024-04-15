import { View, Text, Touchable, TextInput, Pressable } from "react-native";
import { useState } from "react";

import styles from './styles';

export default function Exemplo5 () {

    const [isFocus1, setIsFocus1] =useState(false);
    const [isFocus2, setIsFocus2] =useState(false);
    const [isFocusTotal, setFocusTotal] =useState(false);
    const [n1, set1] =useState(0);
    const [n2, set2] =useState(0);
    const [total, setTotal] =useState('');

    function soma() {
        setTotal(parseFloat(n1) + parseFloat(n2));
    }


    return(

        <View style={styles.container}>

            <Text style={styles.titulo}>Exemplo 5</Text>

            <Text style={styles.txtsaida}>Calculadora Basica</Text>

            <Text style={styles.txtlabel}>1º Numero</Text>

            <TextInput
            style ={
                [
                styles.txtentrada,
                isFocus1 ?
                {
                    borderColor: '#C51162',
                    outline: 'none'
                   }
                :
                  {}
              ]
            }

            onFocus={() => setIsFocus1(true)}
            onBlur={() => setIsFocus1(false)}
            onChangeText={(num1) => set1(num1)}
            value={n1}
            //keyboardtype='numeric'

            />
            
    <Text style={styles.txtsaida}> + </Text>

    <Text style={styles.txtlabel}>2º Numero</Text>

    <TextInput
            style ={
                [
                styles.txtentrada,
                isFocus2 ?
                {
                    borderColor: '#C51162',
                    outline: 'none'
                   }
                :
                  {}
              ]
            }

            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
            onChangeText={(num2) => set2(num2)}
            value={n2}
          
            />
            
            <Text style={[styles.txtsaida , {margin: 0}]}> = </Text>

            <Text style={styles.txtlabel}> Total </Text>

            <TextInput
            style ={
                [
                styles.txtentrada,
                isFocusTotal ?
                {
                    borderColor: '#C51162',
                    outline: 'none'
                   }
                :
                  {}
              ]
            }

            onFocus={() => setIsFocus2(true)}
            onBlur={() => setIsFocus2(false)}
           editable={false}
           value={total ? parseFloat(total).toFixed(2) : ''}
          
            />

            <Pressable
            onPress={() => soma() }
            style={
                ({pressed}) => pressed ?
                [styles.butao, styles.butaotouch]
                :
                styles.butao
            }
            >
                <Text style={styles.txtbutao}> + </Text>
            </Pressable>

        </View>


    )
}