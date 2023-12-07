import React, { useEffect, useContext } from 'react';
import { SafeAreaView, FlatList, View, StyleSheet, Alert } from 'react-native';
import { ListItem } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { UsuarioContext } from './UsuarioContext';

export default function Usuarios(props) {
  const { usuarios, buscarUsuarios, apagarUsuario } = useContext(UsuarioContext);

  useEffect(() => {
    buscarUsuarios();
    console.log("chamou buscarUsuarios", usuarios);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#393e46' }}>
      <FlatList
        data={usuarios}
        keyExtractor={ item => item.id}
        renderItem={({ item }) => (
          <ListItem bottomDivider
          containerStyle={styles.itemContainer}
          underlayColor="#222831">
            <ListItem.Content style={styles.item}>
              <View>
                <ListItem.Title style={styles.itemText}>{item.nome}</ListItem.Title>
                <ListItem.Subtitle style={styles.itemText}>{item.telefone}</ListItem.Subtitle>
                <ListItem.Subtitle style={styles.itemText}>{item.email}</ListItem.Subtitle>
              </View>
              <View style={{ width: 100 }}>
                <ListItem.ButtonGroup 
                  buttons={[
                    <Icon 
                      name="edit"
                      size={23}
                      color={'#421b9b'}
                      onPress={() => props.navigation.navigate("UsuarioDetail", { item })}
                    />,
                    <Icon
                      name="trash"
                      size={22}
                      color={'#eb2632'}
                      onPress={() => {apagarUsuario(item.id);
                    }}
                    />
                  ]}
                />
              </View>
            </ListItem.Content>
          </ListItem>
        )}
      >
      </FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 13,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 15,
    backgroundColor: '#393e46',
  },

  itemText: {
    color: 'white',
  },

  itemContainer: {
    backgroundColor: '#222831',
    marginBottom: 1,
  },
});
