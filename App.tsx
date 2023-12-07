import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Usuarios from './src/components/Usuarios';
import UsuarioDetail from './src/components/UsuarioDetail';
import TelaInicial from './src/components/TelaInicial';
import Icon from 'react-native-vector-icons/FontAwesome6';
import { Alert, Pressable } from 'react-native';
import UsuarioProvider from './src/components/UsuarioContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <UsuarioProvider>
        <Stack.Navigator>
          <Stack.Screen
            name='TelaInicial'
            component={TelaInicial}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name='Usuarios'
            component={Usuarios}
            options={({ navigation }) => ({
              headerRight: () => (
                <Pressable onPress={() => navigation.navigate('UsuarioDetail', { item: { id: '' } })}>
                  <Icon name='add' size={25} color='white' />
                </Pressable>
              ),
              statusBarColor: '#393e46',
              headerStyle: { backgroundColor: '#393e46' },
              title: 'Contatos',
              headerTitleStyle: { color: 'white' },
              headerTintColor: 'white',
            })}
          />
          <Stack.Screen name='UsuarioDetail' 
          component={UsuarioDetail} 
          options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </UsuarioProvider>
    </NavigationContainer>
  );
}
