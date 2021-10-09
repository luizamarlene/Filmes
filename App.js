import 'react-native-gesture-handler'; /* o gesto de arrasta pro lado */
import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Routes from './src/routes';
import StackRoutes from './src/routes/stackRoutes';

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true}/>
      <Routes/>
      
    </NavigationContainer>
  );
}

