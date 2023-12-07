import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';

const TelaInicial = () => {
  const imagemUrl = 'https://downloadillustrations.com/wp-content/uploads/2020/12/CleanShot-2020-12-06-at-15.06.46.png';
  const navigation = useNavigation();

  const irParaUsuario = () => {
    navigation.navigate('Usuarios');
  };

  return (
    <View style={styles.container}>
      <Image source={{ uri: imagemUrl }} style={styles.imagem} />

      <Text style={styles.textStyle}>Salve os contatos dos seus amigos</Text>
      <Text style={styles.textStyle}>
        <Icon
        name="check"
        size={23}
        color={'green'}
        />
        Nome
      </Text>

      <Text style={styles.textStyle}>
        <Icon
        name="check"
        size={23}
        color={'green'}
        />
        Telefone
      </Text>

      <Text style={styles.textStyle}>
        <Icon
        name="check"
        size={23}
        color={'green'}
        />
        Email
      </Text>

      <TouchableOpacity style={styles.botao} onPress={irParaUsuario}>
        <Text style={styles.textoBotao}>Ir para Contatos</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#393e46',
  },
  imagem: {
    width: 200,
    height: 200,
    marginBottom: 20,
    resizeMode: 'cover',
    borderRadius: 15,
  },
  botao: {
    backgroundColor: '#522CDE',
    padding: 10,
    borderRadius: 5,
  },
  textoBotao: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  textStyle: {
    color: 'white',
    fontSize: 24,
    marginBottom: 15,
  }
});

export default TelaInicial;
