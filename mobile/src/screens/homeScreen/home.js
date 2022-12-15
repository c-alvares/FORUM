import * as React from 'react';
import { useState, useEffect } from 'react';
import { View, Text, Image, TextInput  } from 'react-native';


import styles from './styles/style';

export default function Home(){
    const [tema, setTema] = useState(null);

    const [pub, setPub] = useState([]);
    const [posts, setPosts] = useState([]);

     fetch("http://localhost:3000/listarTemas")
    .then(resp =>  { return resp.json()})
    .then(dados => {
      setPub(dados);
    })

    fetch("http://localhost:3000/listarPublicacoes")
    .then(res => { return res.json()})
    .then(data => {
      setPosts(data);
    })

  return(
    <View style={styles.container}>
        <View style={styles.header}>
            <Image style={styles.logo} source={require('../../../../assets/logo.png')} />
            <TextInput style={styles.input} placeholder='Digite o tema de interesse' placeholderTextColor='#d3d3d3'></TextInput>
        </View>
        <View style={styles.retangulo}>
            <Text style={styles.texto}>Escolha um tema ou crie um novo</Text>
        </View>

        {
            pub.map((publi, index) => {
              return(
                <View key={index}>
                  <Text>{publi.nome}</Text>
                  <Image style={styles.img} source={{uri: publi.foto }} />
                </View>
              )
            })
        }
        {
            posts.map((post, index) => {
              return(
                <View key={index}>
                  <Text>{post.publicacoes}</Text>
                </View>
              )
            })
        }

    </View>
  )
}