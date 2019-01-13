import React from 'react'
import { View, TextInput, Button, StyleSheet } from 'react-native'

export default class Search extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Rechercher" style={styles.input}></TextInput>
                <Button title="Cherche" onPress={ () => {} } />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginLeft: 20,
        marginRight: 20,
    },
    input: {
        backgroundColor: 'white',
        padding: 5,
        marginBottom: 5,
        textAlign: 'center',
        borderRadius: 5,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
    }
});