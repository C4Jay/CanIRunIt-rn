import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Rigscores from './scores/rigscores';
import Pickercomp from './scores/picker';
import { ScrollView } from 'react-native-gesture-handler';

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
            <ScrollView>
            <View style={styles.screen}>
                <Text style={styles.text}>{this.props.navigation.getParam('cpu')}</Text>
                <Text style={styles.text}>{this.props.navigation.getParam('gpu')}</Text>
                <Text style={styles.text}>{this.props.navigation.getParam('ram')}</Text>
            <View style={styles.progress}>
                {/* <Text>Progress</Text> 
                <ProgressBar style={{height: 10}} progress={0.9} color="purple" />
                <Text>Progress</Text> 
                <ProgressBar style={{height: 10}} progress={0.6} color="purple" />
                <Text>Progress</Text> 
                <ProgressBar style={{height: 10}} progress={0.7} color="purple" /> */
                }
                <Rigscores
                cpuscore = {0.9}
                gpuscore = {0.6}
                ramscore = {0.8}
                ></Rigscores>
            </View>  
            <View style={{marginTop: 10}}>
                <Pickercomp></Pickercomp>
            </View>
            </View>
            </ScrollView>
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
        fontSize: 15
    },
    progress: {
        alignItems: 'center'
    }
})

export default Gamepost;