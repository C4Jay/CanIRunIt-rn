import React, { Component } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Canirunnavs from './nav/Canirunnavs';

export default function App() {

 
  
  return (
   <Canirunnavs></Canirunnavs>
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
