import { View, Text, Image} from 'react-native'; 

import styles from './styles';

import logo from '../assets/logo.png'

const Saudacoes = (props) => {
    return(
        <Text style={{textAlign: 'center'}}>
                   Ola {props.name} !
                </Text>
    )
}

export default function Atividade1 () { 

    return(
        <View style={styles.container}>
            <Image source={logo} style={styles.image} />
            <Text style={styles.titulo}>
                Atividade 1
            </Text>

                    <Saudacoes name='Mario' />
                    <Saudacoes name='Maria' />
                    <Saudacoes name='Bruno' />
                    <Saudacoes name='Bruna' />
                
        </View>
    );
}
