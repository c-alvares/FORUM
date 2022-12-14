import * as React from 'react';
import { View, Text, Button, TouchableOpacity, Image, TextInput  } from 'react-native';
// import ButtonNext from '../../Componentes/ButtonComponents/ButtonNext'

import styles from './styles/style';

export default function Home(){

  return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../../../../assets/logo.png')} />
            <TextInput style={styles.input} placeholder='Digite o tema de interesse' placeholderTextColor='#d3d3d3'></TextInput>
        </View>
        <View style={styles.retangulo}>
            <Text style={styles.texto}>Escolha um tema ou crie um novo</Text>
        </View>

        <View>
           <View style={styles.coluna}>
            <Text>img</Text>
            <Text>tema</Text>
           </View>
        </View>
{/*         
            <View style={styles.divQuadro}>
                <View style={styles.divCirculo}>
                    <Text style={styles.titulo}>Olá, docinho</Text>
                    <TextInput style={styles.input} placeholder='User_name' placeholderTextColor='#d3d3d3'></TextInput>
                    <TextInput style={styles.input} placeholder='senha'  placeholderTextColor='#d3d3d3'></TextInput>
                    <TouchableOpacity style={styles.btn} onPress={() => {
                        Navigation.navigate('')
                    }}>Logar</TouchableOpacity>
                </View>
            </View> */}
        </View>
  )
}