import React, { Component } from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';
import axios from 'axios'; 
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';

var gamelist = []
var gamelistsort = []

class Gamelist extends Component {

   state = {
       game : '',
     //  gamelist: [],
       first: '',
       games: false,
       spinner: true
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
        gamelistsort = gamelist.sort(function(x,y) {
            if(x.title < y.title) {return -1;}
            if(x.title > y.title) {return 1;}
            return 0;
          })
        this.setState({
            games: true,
            spinner: false
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
            gamerenderlist = gamelistsort.map(game => {
                if(game.title.charAt(0) == this.state.first){
                return (
                    <View key={game._id} style={styles.btn}>
                        <Button color=/* "#fae01e" */"#050a0e" title={game.title.replace(' system requirements','')}></Button>
                    </View>
                )
                }
            })
        }


        return (
            <View style={styles.screen}>
                <Text style={styles.topic}>Choose a game</Text>
            {this.state.game ? <Button title={this.state.game}></Button> : null }
            <Spinner
          visible={this.state.spinner}
          textContent={'wait...'}
          textStyle={styles.spinner}
        />
            <ScrollView>
            {gamerenderlist}
            </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fae01e',
        
    },
    btn: {
        marginTop: 3,
        width: 200,
        maxWidth: '98%',
        borderWidth: 1,
        shadowOpacity: 40
    },
    topic: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 28
    },
    spinner: {
        fontSize: 18,
        fontFamily: 'sans-serif-condensed',
        color: 'white'
    }
})

export default Gamelist;