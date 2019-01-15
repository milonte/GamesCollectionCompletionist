import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
//import FilmItem from './FilmItem'

export default class Films extends React.Component {

    constructor(props){
        super(props);
        this._games = [];
    }

    render() {
        return (
            <View style={styles.films}>
                <FlatList
                    data={this._games}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    films: {
        marginTop: 10,
        alignItems: 'center',
    }
});