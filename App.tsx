import React from 'react';
import { StatusBar } from 'react-native';

import AuthProvider from './src/contexts/auth';

import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <StatusBar backgroundColor="#FF7826" barStyle="light-content" />
        <Routes />
      </AuthProvider>
    </NavigationContainer>
  );
}

