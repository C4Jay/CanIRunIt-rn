import React, { Component } from 'react'
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']

class GameSwitch extends Component {

    static navigationOptions = {
        title: 'CanIRunIt',
        headerStyle: {
          backgroundColor: /* '#f4511e' */ Platform.OS === 'android' ? '#050a0e' : '#f4511e',
        },
        headerTintColor: 'white',
        headerTitleStyle: { 
        },
    }

        render() {

        
        return (
            
            <View style={styles.main}>
                <Text style={styles.text}>Please select a letter</Text>
                <ScrollView style={styles.screen}>
                {letters.map(letter => <View style={styles.btn} key={letter}>
                <Button style={styles.btns} title={letter} onPress={() => {this.props.navigation.navigate({routeName: 'gamelist',
                 params: { 
                    first: letter 
                    } })}}>
                </Button>
                </View>)}
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    main: {
        backgroundColor: '#fae01e',
        paddingTop: 19,
        flex: 1,
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'sans-serif-condensed'
    },
    text: {
        fontSize: 28,
        fontFamily: 'sans-serif-condensed'
    },
    btn: {
        marginTop: 3,
        width: 100
    },
    btns: {
        fontFamily: 'sans-serif-condensed'
    }
})

export default GameSwitch;
