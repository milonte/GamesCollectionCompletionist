import React from 'react'
import { View, TextInput, StyleSheet, FlatList } from 'react-native';
import { SearchBar, Button } from 'react-native-elements';
import gamesData from '../Helpers/gamesData'
import { getApiDatas } from '../API/IGDB_API';
import GameItemShort from './GameItem'


export default class Search extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            games: [],
            searchText: "",
        };
    }

    _searchTextInputChanged(searchText) {
        this.setState({ searchText: searchText });
    }

    _orderDatas(games) {
        games.forEach(element => {
            if (element.release_dates) {
                element.release_dates.sort((a, b) => {
                    if (a.y < b.y) return -1;
                    if (a.y > b.y) return 1;
                    return 0;
                });
            }
        });
        games.sort((a, b) => {
            if (a.release_dates && b.release_dates) {
                if (a.release_dates[0].y < b.release_dates[0].y) return -1;
                if (a.release_dates[0].y > b.release_dates[0].y) return 1;
                return 0;
            }
            return 1;
        });
    }
    
    
    
    _loadDatas() {
        // use API
        if (this.state.searchText.length > 0) {
            let fields = 'name,rating,platforms.name,platforms.generation,platforms.platform_logo.url,popularity,rating,release_dates.m,release_dates.y,cover.url,slug,summary';
            getApiDatas(this.state.searchText, fields).then(data => {
                this._orderDatas(data);
                this.setState({ games: data });
            });
        }
        
        // or use js Helper
        /* this._orderDatas(gamesData);
        this.setState({ games: gamesData }); */
    }
    
    render() {
        return (
            <View style={styles.container}>
                <SearchBar
                    lightTheme
                    onChangeText={(text) => this._searchTextInputChanged(text)}
                    placeholder='Type Here...' />
                <Button
                    raised
                    icon={{ name: 'cached' }}
                    backgroundColor='#5bf'
                    title='SEARCH'
                    onPress={(t) => this._loadDatas(t)} />

               {/*  <Button title="Search" onPress={(t) => this._loadDatas(t)} /> */}
                <FlatList
                    data={this.state.games}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => <GameItemShort game={item} nav={this.props.navigation} />}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
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