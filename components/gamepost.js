import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class Gamepost extends Component {

    static navigationOptions = {
        title: 'Test',
        headerStyle: {
          backgroundColor: /* '#f4511e' */ Platform.OS === 'android' ? '#050a0e' : '#f4511e',
        },
        headerTintColor: 'white',
        headerTitleStyle: { 
        },
    }

    state = {
        cpu: '',
        gpu: '',
        ram: ''
    }

    render () {
        return (
            <View style={styles.screen}>
                <Text style={styles.text}>{this.props.navigation.getParam('cpu')}</Text>
                <Text style={styles.text}>{this.props.navigation.getParam('gpu')}</Text>
                <Text style={styles.text}>{this.props.navigation.getParam('ram')}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fae01e',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
        fontFamily: 'sans-serif-condensed',
        fontSize: 28
    },
    text: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 28
    }
})

export default Gamepost;