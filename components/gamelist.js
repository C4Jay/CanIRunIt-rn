import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios'; 


var gamelist = []

class Gamelist extends Component {

   state = {
       game : '',
     //  gamelist: [],
       first: '',
       games: false
   }

    gamelist = () => {
       this.setState({
           game: "far cry"
       })

   }

   componentDidMount() {
    const letter = this.props.navigation.getParam('first')
    this.setState({
        first: letter
    })
    axios.get('http://canirunit.herokuapp.com/results')
    .then(response => {
        gamelist = response.data,
        this.setState({
            games: true
        })
    }).catch(err => {
        console.log(err)
    })
}



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

        let gamerenderlist = null;

        if(this.state.games){
            gamerenderlist = gamelist.map(game => {
                if(game.title.charAt(0) == this.state.first){
                return (
                    <View>
                        <Button title={game.title.replace(' system requirements','')}></Button>
                    </View>
                )
                }
            })
        }


        return (
            <View style={styles.screen}>
                <Text>{this.props.navigation.getParam('first')}</Text>
                <Button title="click" onPress={this.gamelist}></Button>
            {this.state.game ? <Button title={this.state.game}></Button> : null }
            {gamerenderlist}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fae01e'
    }
})

export default Gamelist;