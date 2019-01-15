import React from 'react'
import { View, TextInput, Button, StyleSheet, FlatList } from 'react-native'
import { getApiDatas } from '../API/IGDB_API';
import Films from '../Components/Films'
import FilmItem from './FilmItem'


export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            films: [],
            searchText: "",
        };
    }

    _searchTextInputChanged(searchText) {
        this.setState({ searchText: searchText });
    }

    _loadDatas() {
        if (this.state.searchText.length > 0) {
            getApiDatas(this.state.searchText).then(data => {
                this.setState({ films: data });
            });
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TextInput placeholder="Rechercher"
                    style={styles.input}
                    onChangeText={(text) => this._searchTextInputChanged(text)}></TextInput>
                <Button title="Cherche" onPress={(t) => this._loadDatas(t)} />
                <FlatList
                    data={this.state.films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <FilmItem film={item} />}
                />
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