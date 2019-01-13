import React from 'react'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

export default class Films extends React.Component {
    render() {
        return (
            <View style={styles.films}>
                <FlatList 
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem film={item}/>}
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