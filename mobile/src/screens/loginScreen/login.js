import * as React from "react";
import { View, TextInput, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import styles from './styles/style';

export default function Login() {

    return (
        <View style={styles.container}>
            <View style={styles.divQuadro}>
                <View style={styles.divCirculo}>
                    <Text style={styles.titulo}>Olá, docinho</Text>
                    <TextInput style={styles.input}></TextInput>
                    <TextInput style={styles.input}></TextInput>
                </View>
            </View>
        </View>
    )
}