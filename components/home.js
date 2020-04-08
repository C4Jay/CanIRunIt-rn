import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

class Home extends Component {
  static navigationOptions = {
    title: 'CanIRunIt',
    headerStyle: {
      backgroundColor: /* '#f4511e' */ Platform.OS === 'android' ? '#050a0e' : '#f4511e',
    },
    headerTintColor: 'white',
    headerTitleStyle: { 
    },
}
    render () {
    return (
        <View style={styles.screen}>
        <Text style={styles.text}>CANIRUNIT_</Text>
        <View style={styles.btnview}>
        <Button color=/* "#00f0ff" */"#fcee09" onPress={() => {this.props.navigation.navigate('gameswitch')}} title="test now"></Button>
        </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#fcee09',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
    text: {
        color: '#050a0e',
        fontSize: 36,
        fontFamily: 'sans-serif-condensed'
      },
      btnview: {
        marginTop: 189,
        width: 168,
        borderWidth: 1 
      }
})

export default Home;