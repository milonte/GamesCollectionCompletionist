import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Tile } from 'react-native-elements';
import { setToGCCApi, removeToGCCApi } from '../API/GCC_API';


export default class GameFullDescription extends Component {
    constructor(props) {
        super(props);
        this.state = {
            possessedGame: this.props.navigation.state.params.possessedGame,
            wantedGame: this.props.navigation.state.params.wantedGame,
        };
    }

    _possessButton(id) {
        let button = <Text></Text>;
        if(true == this.state.possessedGame) {
            button = <Button
            raised
            icon={{ name: 'delete' }}
            backgroundColor='red'
            title='I DON T GOT IT !'
            onPress={() => { 
                removeToGCCApi(id, "possess"),
                this.setState({
                    possessedGame: false,
                })
                 }} />;
        } else if(false == this.state.possessedGame) {
            button = <Button
            raised
            icon={{ name: 'check' }}
            backgroundColor='#2c5'
            title='I GOT IT !'
            onPress={() => {
                setToGCCApi(id, "possess"),
                this.setState({
                    possessedGame: true,
                    wantedGame: false,
                })}} />;
        }
        return button;
    }

    _wantedButton(id) {
        let button = <Text></Text>;
        if(false == this.state.possessedGame && this.state.wantedGame) {
            button = <Button
            raised
            icon={{ name: 'delete' }}
            backgroundColor='red'
            title='I DON T WANT IT !'
            onPress={() => {
                removeToGCCApi(id, "wanted"),
                this.setState({
                    wantedGame: false,
                })}} />;
        } else if (false == this.state.possessedGame && !this.state.wantedGame) {
            button = <Button
            raised
            icon={{ name: 'collections-bookmark' }}
            backgroundColor='#5bf'
            title='I WANT IT !'
            onPress={() => {
                setToGCCApi(id, "wanted"),
                this.setState({
                    wantedGame: true,
                })}} />
        }
        return button;
    }

    render() {
        const game = this.props.navigation.state.params.game;
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        let imageUri = 'https://via.placeholder.com/150';
        if (game.cover) {
            imageUri = 'https:' + game.cover.url.replace("t_thumb","t_cover_big");
        }

        let releaseDate = "Date nor found";
        if (game.release_dates) {
            releaseDate = monthNames[game.release_dates[0].m] + ' ' + game.release_dates[0].y;
        }

        let platform = "No platform found";

        if (game.platforms) {
            game.platforms.sort((a, b) => {
                if (a.generation < b.generation) return -1;
                if (a.generation > b.generation) return 1;
                return 0;
            });
            platform = game.platforms[0].name;
        }

        return (
            <View style={styles.container}>
                <View>
                    <Tile
                        imageSrc={{ uri: imageUri }}
                        featured
                        titleStyle={styles.title}
                    />
                    <View style={styles.overlay}>
                        <Text style={styles.title}>{game.name}</Text>
                        <View style={styles.buttons}>
                            {this._wantedButton(game.id, false)}
                            {this._possessButton(game.id,)} 
                        </View>
                    </View>
                </View>
                <View style={styles.infos}>
                    <Text> {platform}</Text>
                    <Text>Release date: {releaseDate}</Text>
                    <Text>Description: {game.summary}</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    infos: {
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        textAlign: 'center',
    },
    overlay: {
        marginTop: -50,
        backgroundColor: 'rgba(0,0,0,.7)',
        width: '100%',
        paddingTop: 0,
        paddingBottom: 20,
    },
    title: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 30,
    },
    buttons: {
        alignSelf: 'center',
        flexDirection: 'row',
    },
});