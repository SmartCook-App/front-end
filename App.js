import 'react-native-gesture-handler';
import React, { useEffect, useReducer, useMemo } from 'react';
import * as SecureStore from 'expo-secure-store';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Main from './src/pages/Main';

const Stack = createStackNavigator();

import AuthContext from './src/config';

export default function App() {

  function reducer(state, action) {
    switch (action.type) {
      case 'RESTORE_TOKEN':
        return {
          userToken: action.token,
        };
      case 'SIGN_IN':
        return {
          userToken: action.token,
        };
      case 'SIGN_OUT':
        return {
          userToken: null,
        };
    }
  }

  const [state, dispatch] = useReducer(reducer, { userToken: null });

  useEffect(() => { // Verificar en la memoria si estoy logeado
    const bootstrapAsync = async () => {
      let userToken;
      try {
        userToken = await SecureStore.getItemAsync('userToken');
        console.log("Token usuario: ", userToken);
      } catch (e) {
        console.log("Error: ", e);
      }
        dispatch({ type: 'RESTORE_TOKEN', token: userToken });
      };
      bootstrapAsync();
    }, []);

  const authContext = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  console.log(state);
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        <Stack.Navigator>
        {state.userToken == null ? (
          <>
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Login" component={Login} />
          </>
        ) : (
          <Stack.Screen name="Main" component={Main} />
        )}
        </Stack.Navigator>
      </NavigationContainer>
    </AuthContext.Provider>
  );
}
