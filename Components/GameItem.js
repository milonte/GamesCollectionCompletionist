import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { getGCCApiData } from '../API/GCC_API';


export default class GameItemShort extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            possessedGame: this.props.possessedGame,
            wantedGame: this.props.wantedGame,
        };
    }

    componentWillMount() {
        if (!this.state.possessedGame) {
            getGCCApiData(this.props.game.id, "possess")
                .then(data => {
                    //console.log(data)
                    this.setState({
                        possessedGame: data
                    });
                });
                getGCCApiData(this.props.game.id, "wanted")
                .then(data => {
                    //console.log(data)
                    this.setState({
                        wantedGame: data
                    });
                });
        }
    }

    render() {
        let game = this.props.game;
        let possessedGame = this.state.possessedGame;
        //console.log(possessedGame);
        let wantedGame = this.state.wantedGame;
        let platformElt = <Text style={styles.platforms}> No Platform Found</Text>;
        let imageUri = 'https://via.placeholder.com/150';
        let releaseDate = "Date not found";
        let possessedElt = <Text></Text>;
        let wantedElt = <Text></Text>;
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        if (game.cover) {
            imageUri = 'https:' + game.cover.url.replace("t_thumb", "t_cover_big");
        }
        if (game.release_dates) {
            releaseDate = monthNames[game.release_dates[0].m] + ' ' + game.release_dates[0].y;
        }
        if (game.platforms) {
            game.platforms.sort((a, b) => {
                if (a.generation < b.generation) return -1;
                if (a.generation > b.generation) return 1;
                return 0;
            });
            platformElt = <Text style={styles.platforms}>{game.platforms[0].name}</Text>;
        }
        if (possessedGame) {
            possessedElt = <View style={styles.details}>
                <Icon styles={styles.possessedIcon} name='check' type='font-awesome' color='green' />
                <Text style={styles.possessedText}>You got it !</Text>
            </View>
        }
        if (wantedGame && !possessedGame) {
            wantedElt = <View style={styles.details}>
                <Icon styles={styles.wantedIcon} name='bookmark' type='font-awesome' color='#5bf' />
                <Text style={styles.wantedText}>You want it !</Text>
            </View>
        }
        return (
            <TouchableOpacity onPress={() => this.props.nav.navigate('GameDetails', { game, possessedGame, wantedGame })} style={styles.container}>
                <View>
                    <Image style={styles.illustration} source={{ uri: imageUri }} />
                </View>
                <View style={styles.infos}>
                    <View style={styles.title}>
                        <Text style={styles.titleText}>{game.name}</Text>
                    </View>
                    <Text>{releaseDate}</Text>
                    <Text>{platformElt}</Text>
                </View>
                {possessedElt}
                {wantedElt}
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginBottom: 15,
        maxWidth: 350,
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        borderRadius: 10,
        backgroundColor: 'white',
        padding: 10,
    },
    platformLogo: {
        height: 20,
        resizeMode: 'contain',
    },
    infos: {
        flex: 1,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,

    },
    illustration: {
        alignItems: 'center',
        width: 80,
        height: 120,
        resizeMode: 'contain',
        marginLeft: 5,
    },
    title: {
        flexDirection: 'row',
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
    },
    titleText: {
        fontWeight: 'bold',
        color: 'rgba(20,160,250,.8)',
        textAlign: 'center',
    },
    possessed: {
        position: 'absolute',
        top: 0,
        right: 0,
        color: "green",
    },
    details: {
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        width: "100%",
        justifyContent: 'center',
        flexDirection: 'row',
        paddingTop: 5,
        //backgroundColor: 'rgba(0,150,0,.4)'
    },
    possessedIcon: {
        
    },
    possessedText: {
        color: 'green',
        alignSelf: 'center',
        marginLeft: 10,
    },
    wantedText: {
        color: '#5bf',
        alignSelf: 'center',
        marginLeft: 10,
    },
});