import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import Home from './components/home';
import GameSwitch from './components/gameswitch';

export default function App() {
  return (
    
    <View style={styles.container}>
    {/* <Home></Home> */}
    <GameSwitch></GameSwitch>   
    </View>
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
