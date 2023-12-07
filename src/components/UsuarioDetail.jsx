import React, { useContext, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Alert, StyleSheet, Button } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { UsuarioContext } from './UsuarioContext';
import { TextInput } from 'react-native-gesture-handler';
import { GestureHandlerRootView } from 'react-native-gesture-handler';


export default function UsuarioDetail(props) {

  const { id, nome, telefone, email, setId, setNome, setTelefone, setEmail, gravarDados } = useContext(UsuarioContext);

  useEffect(() => {
    console.log(props.route.params.item);
    if (props.route.params.item.id == "") {
      setId("");
      setNome("");
      setTelefone("");
      setEmail("");
      console.log("setou id vazio");
    } else {
      setId(props.route.params.item.id.toString());
      setNome(props.route.params.item.nome);
      setTelefone(props.route.params.item.telefone ? props.route.params.item.telefone.toString() : "");
      setEmail(props.route.params.item.email);
      console.log("setou id");
    }
  }, [])


  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <View style={styles.container}>
        <TextInput
          style={styles.inputID}
          placeholder='Id'
          placeholderTextColor='white'
          editable={false}
          value={id}
          onChangeText={setId}
        />

        <TextInput
         style={styles.input}
          placeholder='Nome:'
          placeholderTextColor='white'
          value={nome}
          onChangeText={setNome}
        />

        <TextInput
          style={styles.input}
          placeholder='Telefone:'
          placeholderTextColor='white'
          value={telefone}
          onChangeText={setTelefone}
        />

        <TextInput
         style={styles.input}
          placeholder='Email:'
          placeholderTextColor='white'
          value={email}
          onChangeText={setEmail}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            gravarDados();
            props.navigation.goBack();
          }}
        >
          <Text style={styles.buttonText}>Gravar </Text>
          <Icon name="save" size={23} color={'white'} />
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#eb2632' }]}
          onPress={() => props.navigation.goBack()}
        >
          <Text style={styles.buttonText}>Cancelar</Text>
        </TouchableOpacity>

      </View>
    </GestureHandlerRootView>
  );
}



const styles = StyleSheet.create({
  usuarioContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#DBDBE2',
    marginBottom: 2,
  },
  usuarioName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: "#522CDE",
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3baea0',
    height: 40,
    margin: 5,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    marginLeft: 5,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#393e46',
  },
  input: {
    height: 40,
    borderColor: 'white',
    borderWidth: 1,
    margin: 5,
    color: 'white',
    paddingHorizontal: 10,
  },
  inputID: {
    height: 40,
    borderColor: '#8971d0',
    borderWidth: 1,
    margin: 5,
    color: 'white',
    paddingHorizontal: 10,
    textAlign: 'center',
  },
});
