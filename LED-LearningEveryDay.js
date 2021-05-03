//* eslint-disable no-trailing-spaces */
//* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable semi */
/* eslint-disable comma-dangle */
//* eslint-disable no-unused-vars */
///* eslint-disable eslint-comments/no-unused-disable */
//* eslint-disable eslint-comments/no-unused-disable */
/* eslint-disable prettier/prettier */
//* eslint-disable no-unused-vars */
import React from 'react';
import { StyleSheet, View, Image, Text } from 'react-native';
import foto from './assets/foto.jpeg';

const App = () => {

  return (
    <View style={style.page}>
        <View style={style.container_cabecalho}>
          <Image source={foto} style={style.foto}/>
          <Text style={style.nome}> LEARNING EVERY DAY</Text>
          <Text style={style.funcao}> Quiz Educativo</Text>
        </View>
        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text>Modos de Jogo</Text>
            </View>
            <View style={style.card_content}>
              <Text style={style.card_content_text}>Gerais</Text>
              <Text style={style.card_content_text}>Enem</Text>
              <Text style={style.card_content_text}>Desafios</Text>
            </View>
          </View>
        </View>
        <View style={style.card_container}>
          <View style={style.card}>
            <View style={style.card_header}>
              <Text style={style.consulta}>Consulta SISU</Text>
            </View>
          </View>
        </View>
    </View>
  );
};

const style = StyleSheet.create({

  page: {
  backgroundColor: '#E7E7E7',
  flex: 1,
  },
  container_cabecalho : {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50
  },
  foto : {
    width: 250,
    height: 250,
    borderRadius: 125
  },
  nome: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10
  },
  funcao: {
    color: '#939393',
    marginBottom: 10
  },
  redes_sociais: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      width: '60%',
      marginTop: 20
  },
  card_container:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  card: {
    width: '60%',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#939393',
    padding: 10,
    backgroundColor: '#FFF'
  },
  card_content: {
    marginTop: 20,

  },
  card_content_text:{
    color: '#939393',
    marginBottom: 10
  },
  consulta:{
    fontSize: 16
  }
})

export default App;
