import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios'; 
import { ScrollView } from 'react-native-gesture-handler';
import Spinner from 'react-native-loading-spinner-overlay';
import { Button } from 'react-native-paper';

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
                        <Button color="#fae01e" labelStyle={{color: '#050a0e', fontSize: 9}} mode="text" >{game.title.replace(' system requirements','')}</Button>
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
            <ScrollView style={styles.scroll}>
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
       
        width: 256,
        borderWidth: 1,
        shadowOpacity: 40,
        borderRadius: 6
    },
    topic: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 28
    },
    spinner: {
        fontSize: 18,
        fontFamily: 'sans-serif-condensed',
        color: 'white'
    },
    scroll: {
        marginBottom: 10,
    }
})

export default Gamelist;