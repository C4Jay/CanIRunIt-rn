import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';

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
            <View style={styles.progress}>
                <Text>Progress</Text> 
                <ProgressBar style={{height: 10}} progress={0.9} color="purple" />
                <Text>Progress</Text> 
                <ProgressBar style={{height: 10}} progress={0.6} color="purple" />
                <Text>Progress</Text> 
                <ProgressBar style={{height: 10}} progress={0.7} color="purple" />
            </View>  
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        backgroundColor: '#fae01e',
        alignItems: 'center',
     //   justifyContent: 'center',
        paddingTop: 10,
        fontFamily: 'sans-serif-condensed',
        fontSize: 28
    },
    text: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 28
    },
    progress: {
        width: 256
    }
})

export default Gamepost;