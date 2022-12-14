import * as React from "react";
import { View, TextInput, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import styles from './styles/style';

export default function Login() {

    return (
        <View style={styles.container}>
            <View style={styles.divQuadro}>
                <View style={styles.divCirculo}>
                    <Text style={styles.titulo}>Olá, docinho</Text>
                    <TextInput style={styles.input} placeholder='User_name' placeholderTextColor='#d3d3d3'></TextInput>
                    <TextInput style={styles.input} placeholder='senha'  placeholderTextColor='#d3d3d3'></TextInput>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        Navigation.navigate('')
                    }}>Logar</TouchableOpacity>
                </View>
            </View>
        </View>
    )
}