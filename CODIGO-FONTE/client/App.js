import 'react-native-gesture-handler';
import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducer from './reducers/TicketReducer';
import mySaga from './saga/saga';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './features/screens/home_screen/HomeScreen';
import EscolherTicket from './features/screens/comprar_ticket/EscolherTicket';
import BuscarScreen from './features/screens/buscar_screen/BuscarScreen';
import ShowList from './features/screens/buscar_screen/ShowList';
import CadastrarScreen from './features/screens/cadastrar_screen/CadastrarScreen';
import CadastroSala from './features/screens/cadastrar_screen/Cadastro_Sala/CadastroSala';
import IngressoScreen from './features/screens/ingresso_screen/IngressoScreen';

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(mySaga);

const Stack = createStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{ title: 'FITUB', headerTitleAlign: 'center' }}
          />
          <Stack.Screen
            name="Buscar"
            component={BuscarScreen}
            options={{ title: 'Buscar Espetáculo', headerTitleAlign: 'right' }}
          />
          <Stack.Screen
            name="Lista"
            component={ShowList}
            options={{
              title: 'Escolher Espetáculo',
              headerTitleAlign: 'right',
            }}
          />
          <Stack.Screen
            name="Cadastrar"
            component={CadastrarScreen}
            options={{
              title: 'Cadastrar Espetáculo',
              headerTitleAlign: 'right',
            }}
          />
          <Stack.Screen
            name="CadastroSala"
            component={CadastroSala}
            options={{
              title: 'Cadastrar Sala',
              headerTitleAlign: 'right',
            }}
          />
          <Stack.Screen
            name="EscolherTicket"
            component={EscolherTicket}
            options={{
              title: 'Comprar Ticket',
              headerTitleAlign: 'right',
            }}
          />
          <Stack.Screen
            name="Ingresso"
            component={IngressoScreen}
            options={{
              title: 'Comprar ingresso',
              headerTitleAlign: 'right',
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
