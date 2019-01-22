import React, { Component } from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button, Tile } from 'react-native-elements';


export default class GameFullDescription extends Component {
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
                            <Button
                                raised
                                icon={{ name: 'collections-bookmark' }}
                                backgroundColor='#5bf'
                                title='I WANT IT !'
                                onPress={() => { }} />
                            <Button
                                raised
                                icon={{ name: 'check' }}
                                backgroundColor='#2c5'
                                title='I GOT IT !'
                                onPress={() => { }} />
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