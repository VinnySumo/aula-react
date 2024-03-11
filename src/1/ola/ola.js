import { Text, View } from 'react-native';

import olastyles from './olastyles';
import styles from '../styles';

const Saudacoes = (props) => {
    return(
        <Text style={{textAlign: 'center'}}>
                   Ola {props.name} !
                </Text>

            

    )
}

export default function ola (){
    return
    <View styles={styles.container}>
                    <Saudacoes name='Mario' />
                    <Saudacoes name='Maria' />
                    <Saudacoes name='Bruno' />
                    <Saudacoes name='Bruna' />
                    </View>
}

