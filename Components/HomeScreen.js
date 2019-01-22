import React, { Component } from 'react'
import { StyleSheet, Button, View, Text } from 'react-native';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <View>
                    <Text>HOMEPAGE</Text>
                    <View style={styles.footer}>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(20,180,250,.2)',
    },
    footer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
    }
});