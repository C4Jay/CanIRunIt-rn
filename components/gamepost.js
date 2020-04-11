import React, { Component, useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar, Colors } from 'react-native-paper';
import Rigscores from './scores/rigscores';
import Pickercomp from './scores/picker';
import { ScrollView } from 'react-native-gesture-handler';
import axios from 'axios';

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
        ram: '',
        cpuscore: 0,
        gpuscore: 0,
        ramscore: 0
    }

    componentDidMount() {
        axios.get('https://warm-island-31012.herokuapp.com/cpuscoresfinl/Intel '+ this.props.navigation.getParam('cpu'))
    .then(response => {
      console.log(response.data.score)
      this.setState({
          cpuscore: response.data.score
      })

    }).catch(err => {
        console.log(err)
    })

    axios.get('https://warm-island-31012.herokuapp.com/gpuscoresfinl/'+ this.props.navigation.getParam('gpu'))
    .then(response => {
      console.log(response.data.score)
      this.setState({
        gpuscore: response.data.score
    })

    }).catch(err => {
        console.log(err)
    })

    axios.get('https://warm-island-31012.herokuapp.com/ramscores/'+ this.props.navigation.getParam('ram').replace(' GB','GB') )
    .then(response => {
      console.log(response)
      this.setState({
        ramscore: response.data.score
    })

    }).catch(err => {
        console.log(err)
    })
    }

    render () {
        return (
            <ScrollView style={styles.main}>
            <View style={styles.screen}>
            <Text style={{fontSize: 19}}>Minimum requirements</Text>
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
                topic = "Minimum requirements scores"
                cpuscore = {this.state.cpuscore / 1413}
                gpuscore = {this.state.gpuscore / 9555}
                ramscore = {this.state.ramscore / 16}
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
        fontSize: 28,
        borderWidth: 1,
        marginBottom: 10
    },
    text: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 15
    },
    progress: {
        alignItems: 'center'
    },
    main: {
        borderWidth: 1,
        marginBottom: 10
    }
})

export default Gamepost;