import React, { Component } from 'react'
import { getGCCApiDatas } from '../API/GCC_API';
import { getIgdbIdSearchData } from '../API/IGDB_API';
import { StyleSheet, View, FlatList } from 'react-native'
import GameItemShort from './GameItem'


export default class Library extends Component {

    constructor(props) {
        super(props);
        this.state = {
            possessedGames: "",
        };
    }
    // when load component, do once =>
    componentDidMount() {
        let searchGames = [];
        let fields = 'name,rating,platforms.name,platforms.generation,platforms.platform_logo.url,popularity,rating,release_dates.m,release_dates.y,cover.url,slug,summary';
        // Search games from local API Database
        getGCCApiDatas().then(data => {
            data.forEach(el => {
                searchGames.push(el.game);
            });
            // Search games from IGDB API
            getIgdbIdSearchData(
                searchGames.join(','),
                fields
            ).then(gameData => {
                this.setState({ possessedGames: gameData });
            });
        })
    }

    render() {

        return (
            <View>
                <FlatList
                    data={this.state.possessedGames}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({ item }) =>
                            <GameItemShort
                                game={item}
                                nav={this.props.navigation}
                                possessedGames={this.state.possessedGames}
                            />
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({})
