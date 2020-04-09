import React, { Component } from 'react'
import { View, Text, StyleSheet} from 'react-native';
import { Button } from 'react-native-paper';

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
        <Button color=/* "#00f0ff" */"#fae01e" labelStyle={{color: '#050a0e'}} onPress={() => {this.props.navigation.navigate('gameswitch')}}>test now</Button>
        </View>
        </View>
    )
    }
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: /* '#fcee09' */'#fae01e',
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
        borderWidth: 1,
        borderRadius: 6 
      }
})

export default Home;