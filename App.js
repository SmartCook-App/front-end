import 'react-native-gesture-handler';
import React, { useEffect, useReducer, useMemo, useState } from 'react';
import { AppLoading } from 'expo';
import * as SecureStore from 'expo-secure-store';
import * as Font from 'expo-font';
/*
const getFonts = () => Font.loadAsync({
  'nunito-regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
  'nunito-bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
  'nunito-semiBold': require('./src/assets/fonts/Nunito-SemiBold.ttf'),
  'nunito-light': require('./src/assets/fonts/Nunito-Light.ttf'),
  'nunito-black': require('./src/assets/fonts/Nunito-Black.ttf'),
})*/

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/Home';
import Login from './src/pages/Login';
import Main from './src/pages/Main';

const Stack = createStackNavigator();

import AuthContext from './src/config';

export default function App() {

  const [fontsLoaded, setFontsLoaded] = useState(false);

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

  useEffect(() => {
    const getFont = async () => {
      await Font.loadAsync({
        'nunito-regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
        'nunito-bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
        'nunito-semiBold': require('./src/assets/fonts/Nunito-SemiBold.ttf'),
        'nunito-light': require('./src/assets/fonts/Nunito-Light.ttf'),
        'nunito-black': require('./src/assets/fonts/Nunito-Black.ttf'),
      });
      setFontsLoaded(true)
    };
    getFont();
  }, []);

  const authContext = useMemo(() => {
    return { state, dispatch };
  }, [state, dispatch]);

  console.log(state);

  if(!fontsLoaded){
    return null
  }
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

