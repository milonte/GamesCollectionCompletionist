import React, { Component } from 'react'
import { StyleSheet, Button, View } from 'react-native';
import Search from '../Components/Search';
import TitleBar from '../Components/TitleBar';
import BottomBar from '../Components/BottomBar';

export default class HomeScreen extends Component {
    render() {
        return (
            <View>
                <View>
                    <Search nav={this.props.navigation} />
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