import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Gamepost extends Component {

    state = {
        cpu: '',
        gpu: '',
        ram: ''
    }

    render () {
        return (
            <View>
                <Text>{this.props.navigation.getParam('cpu')}</Text>
            </View>
        )
    }
}

export default Gamepost;