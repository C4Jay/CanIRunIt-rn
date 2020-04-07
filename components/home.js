import React from 'react'
import { View, Text, StyleSheet, Button } from 'react-native';

const Home = (props) => {
    return (
        <View>
        <Text style={styles.text}>CANIRUNIT_</Text>
        <View style={styles.btnview}>
        <Button color=/* "#00f0ff" */"#fcee09" title="test now"></Button>
        </View>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        color: '#050a0e',
        fontSize: 36,
        fontFamily: 'sans-serif-condensed'
      },
      btnview: {
        marginTop: 189,
        width: 168,
        borderWidth: 1 
      }
})

export default Home;