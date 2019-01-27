import React, { Component } from 'react'
import { getGCCApiDatas } from '../API/GCC_API';
import { getIgdbIdSearchData } from '../API/IGDB_API';
import { StyleSheet, View, FlatList, ScrollView, RefreshControl } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import GameItemShort from './GameItem';

export default class WantedGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            wantedGames: null,
            refreshing: false,
        };
    }
    // when load component, do once =>
    componentDidMount() {
        this._loadDatas();
    }

    _update() {
        this._loadDatas();
    }

    _loadDatas() {
        this.setState({refreshing:true})
        let searchGames = [];
        let fields = 'name,rating,platforms.name,platforms.generation,platforms.platform_logo.url,popularity,rating,release_dates.m,release_dates.y,cover.url,slug,summary';
        // Search games from local API Database
        getGCCApiDatas("wanted").then(data => {
            data.forEach(el => {
                searchGames.push(el.game);
            });

            // Search games from IGDB API
            if (searchGames.length > 0) {
                getIgdbIdSearchData(
                    searchGames.join(','),
                    fields
                ).then(gameData => {
                    this.setState({ wantedGames: gameData });
                });
            } else {
                this.setState({ wantedGames: "empty" });
            }
        });
        this.setState({refreshing:false})
    }

    render() {

        if (null == this.state.wantedGames) {
            return (
                <View style={styles.textContainer}>
                    <View style={styles.text}>
                        <Text>LOADING...</Text>
                        <Icon styles={styles.wantedIcon} name='times-circle' type='font-awesome' color='#5bf' />
                    </View>
                </View>
            )
        }
        else if ("empty" == this.state.wantedGames) {
            return (
                <View style={styles.textContainer}>
                    <View style={styles.text}>
                        <Text>No Games !</Text>
                        <Text>Go to Search into the navigation bar to add games !</Text>
                    </View>
                </View>
            )
        } else {
            return (
                <ScrollView  style={styles.container} refreshControl={
                    <RefreshControl
                        //tintColor={$.config.colors.style}
                        onRefresh={() => this._loadDatas()}
                        refreshing={this.state.refreshing}
                    />
                }>
                <Text style={styles.refreshText}>Scroll Top to refresh</Text>
                <FlatList
                    data={this.state.wantedGames}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={
                        ({ item }) =>
                            <GameItemShort
                                game={item}
                                nav={this.props.navigation}
                                wantedGame={true}
                            />
                    }
                />
                </ScrollView>)
        }

    }
}

const styles = StyleSheet.create({
    container: {
  padding: 5,
    },
    textContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        alignItems: 'center',
        textAlign: 'center',
        flexWrap: 'wrap',
    },
    refreshText: {
        color: 'grey',
        padding:0,
        textAlign: 'center',
        
    }
})
