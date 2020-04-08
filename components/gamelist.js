import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

class Gamelist extends Component {

    static navigationOptions = {
        title: 'Game-list',
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
                <Text>{this.props.navigation.getParam('first')}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fcee09'
    }
})

export default Gamelist;