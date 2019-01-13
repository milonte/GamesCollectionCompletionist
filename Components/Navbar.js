import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Navbar extends React.Component {
    render() {
        return (
            <View style={styles.container}>        
                <Text style={styles.title}>React Native</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        height: 80,
        backgroundColor: 'rgba(0,0,0,.8)'
    },
    title: {
        marginTop: 40,
        textAlign: 'center',
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
});