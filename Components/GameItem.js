import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import { Button } from 'react-native-elements';

export default class GameItemShort extends React.Component {
    render() {
        let game = this.props.game;
        let possessedGames = this.props.possessedGames;
        const monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];
        let platformElt = <Text style={styles.platforms}> No Platform Found</Text>;
        let imageUri = 'https://via.placeholder.com/150';
        if (game.cover) {
            imageUri = 'https:' + game.cover.url.replace("t_thumb", "t_cover_big");
        }
        let releaseDate = "Date not found";
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
        return (
            <View style={styles.container}>
                <View>
                    <Image style={styles.illustration} source={{ uri: imageUri }} />
                </View>
                <View style={styles.infos}>
                    <Text style={styles.title}>{game.name}</Text>
                    <Text>{releaseDate}</Text>
                    <Text>{platformElt}</Text>
                </View>
                <View style={styles.details}>
                    <Button
                        raised
                        icon={{ name: 'cached' }}
                        backgroundColor='#5bf'
                        title='MORE DETAILS'
                        onPress={() => this.props.nav.navigate('GameDetails', { game, possessedGames })} />
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        marginTop: 15,
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
        maxWidth: 200,
        padding: 10,
        paddingTop: 10,
        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',

    },
    illustration: {
        alignItems: 'center',
        width: 80,
        height: 120,
        resizeMode: 'contain',
        marginLeft: 5,
    },
    title: {
        fontWeight: 'bold',
        color: 'rgba(20,160,250,.8)',
        textAlign: 'center',

        paddingBottom: 10,
        borderBottomWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
    },
    overview: {
    },
    date: {
        textAlign: 'left',
        marginTop: 5,
        paddingTop: 5,
        fontStyle: 'italic',
    },
    platforms: {

    },
    details: {
        width: "100%",
    }
});