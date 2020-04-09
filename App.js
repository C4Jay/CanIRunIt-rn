import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Canirunnavs from './nav/Canirunnavs';
import { Provider as PaperProvider } from 'react-native-paper';

export default function App() {

 
  
  return (
    <PaperProvider>
   <Canirunnavs></Canirunnavs>
   </PaperProvider>
  );
  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fcee09',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
