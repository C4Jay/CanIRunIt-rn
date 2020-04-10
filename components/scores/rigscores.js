import React from 'react'
import { View, Text, StyleSheet } from 'react-native';
import { ProgressBar, Card } from 'react-native-paper';

const Rigscores = (props) => {
    return (
        <View style={styles.progress}>
        <Card elevation={19} style={styles.card}>
        <Card.Title title={props.topic} style={styles.topic}></Card.Title>
                <Text>CPU</Text> 
                <ProgressBar style={{height: 30}} progress={props.cpuscore} color="#00c8ff" />
                <Text>GPU</Text> 
                <ProgressBar style={{height: 30}} progress={props.gpuscore} color="#00ff9f" />
                <Text>RAM</Text> 
                <ProgressBar style={{height: 30}} progress={props.ramscore} color="#2bff00" />
                </Card>
        </View>  
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'sans-serif-condensed',
        fontSize: 28
    },
    progress: {
        width: 319,
        maxWidth: '90%'
    },
    card: {
        padding: 8,
        elevation: 19,
        backgroundColor: 'white'
    },
    topic: {
        alignItems: 'center',
        fontSize: 18
    }
})

export default Rigscores