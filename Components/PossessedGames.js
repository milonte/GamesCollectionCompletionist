import React, { Component } from 'react'
import { getGCCApiDatas } from '../API/GCC_API';
import { getIgdbIdSearchData } from '../API/IGDB_API';
import { StyleSheet, View, FlatList, ScrollView, RefreshControl } from 'react-native';
import { LinearGradient } from 'expo';
import { Text, Icon } from 'react-native-elements';
import GameItemShort from './GameItem';

export default class PossessedGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            possessedGames: null,
            refreshing: false,
        };
    }
    // when load component, do once =>
    componentDidMount() {
        this._loadDatas();
    }

    _loadDatas() {
        this.setState({ refreshing: true })
        let searchGames = [];
        let fields = 'name,rating,platforms.name,platforms.generation,platforms.platform_logo.url,popularity,rating,release_dates.m,release_dates.y,cover.url,slug,summary';
        // Search games from local API Database
        getGCCApiDatas("possess").then(data => {
            data.forEach(el => {
                searchGames.push(el.game);
            });

            // Search games from IGDB API
            if (searchGames.length > 0) {
                getIgdbIdSearchData(
                    searchGames.join(','),
                    fields
                ).then(gameData => {
                    this.setState({ possessedGames: gameData });
                });
            } else {
                this.setState({ possessedGames: "empty" });
            }
        });
        this.setState({ refreshing: false })
    }

    render() {

        if (null == this.state.possessedGames) {
            return (
                <View style={styles.textContainer}>
                    <View style={styles.text}>
                        <Text>LOADING...</Text>
                        <Icon styles={styles.wantedIcon} name='times-circle' type='font-awesome' color='#5bf' />
                    </View>
                </View>
            )
        }
        else if ("empty" == this.state.possessedGames) {
            return (
                <ScrollView style={styles.container} refreshControl={
                    <RefreshControl
                        onRefresh={() => this._loadDatas()}
                        refreshing={this.state.refreshing}
                    />
                }>
                    <Text style={styles.refreshText}>Scroll Top to refresh</Text>
                    <LinearGradient colors={['#046020', '#719941']} start={[1, 0]} style={styles.possessLine}>
                        <Icon styles={styles.icon} name='check' type='font-awesome' color='white' size={20} />
                        <Text style={styles.possessText}>No game in your collection</Text>
                    </LinearGradient>
                </ScrollView>
            )
        } else {
            return (
                <ScrollView style={styles.container} refreshControl={
                    <RefreshControl
                        //tintColor={$.config.colors.style}
                        onRefresh={() => this._loadDatas()}
                        refreshing={this.state.refreshing}
                    />
                }>
                    <Text style={styles.refreshText}>Scroll Top to refresh</Text>
                    <LinearGradient colors={['#046020', '#719941']} start={[1, 0]} style={styles.possessLine}>
                        <Icon styles={styles.icon} name='check' type='font-awesome' color='white' size={20} />
                        <Text style={styles.possessText}>{this.state.possessedGames.length} games in your collection</Text>
                    </LinearGradient>
                    <FlatList
                        data={this.state.possessedGames}
                        keyExtractor={(item) => item.id.toString()}
                        renderItem={
                            ({ item }) =>
                                <GameItemShort
                                    game={item}
                                    nav={this.props.navigation}
                                    possessedGame={true}
                                />
                        }
                    />
                </ScrollView>)
        }

    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#333",
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
        padding: 0,
        textAlign: 'center',
    },
    possessLine: {
        flexDirection: 'row',
        padding: 5,
        borderWidth: 1,
        borderColor: 'rgba(0,100,0,.8)',
        paddingLeft: 20,
        marginBottom: 5,
    },
    possessText: {
        color: 'white',
        paddingBottom: 5,
        fontSize: 15,
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 15,
    },
})
