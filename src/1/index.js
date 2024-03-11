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
            <Image source={logo} style= { { width: '100%', height: "15%" }} />
            <Text style={styles.paragraph}>
                Atividade 1
            </Text>
            
            <Text style={{textAlign: 'center'}}>
                    Ola maria!
                </Text>
                
            
        </View>
    );
}
