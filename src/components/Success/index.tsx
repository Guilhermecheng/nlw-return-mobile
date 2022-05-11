import { View, TouchableOpacity, Text, Image } from "react-native";

import successImg from '../../assets/success.png';

import { theme } from "../../theme";
import { Copyright } from "../Copyright";

import { styles } from './styles';

export function Success() {
    return (
        <View style={styles.container}>
            <Image
                source={successImg}
                style={styles.image}
            />

            <Text style={styles.title}>
                Acradecemos o feedback
            </Text>

            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonTitle}>
                    Quero enviar outro
                </Text>
            </TouchableOpacity>
            <Copyright />
        </View>
    )
}