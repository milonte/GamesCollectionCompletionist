import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native';
import {  Button } from 'react-native-elements';

export default class GameItem extends React.Component {
    render() {
        let game = this.props.game;
        let illustrationElt = <Image style={styles.illustration} source={{ uri: 'https://via.placeholder.com/150' }} />;
        let releaseDateElt = <Text style={styles.date}> No Dates Found</Text>;
        let platformElt = <Text style={styles.platforms}> No Platform Found</Text>;
        /* console.log(game); */
        if (game.cover) {
            illustrationElt = <Image style={styles.illustration} source={{ uri: 'https:' + game.cover.url }} />;
        }
        if (game.release_dates) {
            /* game.release_dates.sort( (a,b) => {
                if(a.y<b.y) return-1;
                if(a.y>b.y) return 1;
                return 0;
            }); */
            releaseDateElt = <Text style={styles.date}>Date: {game.release_dates[0].m} {game.release_dates[0].y}</Text>;
        }
        if(game.platforms) {
             game.platforms.sort( (a,b) => {
                if(a.generation<b.generation) return-1;
                if(a.generation>b.generation) return 1;
                return 0;
            });
            platformElt = <Text style={styles.platforms}>Platforms: {game.platforms[0].name}</Text>;
        }
        
        return (
            <View style={styles.container}>
                <View>
                    {illustrationElt}
                </View>
                <View style={styles.infos}>
                    <Text style={styles.title}>{game.name}</Text>
                    {releaseDateElt}
                    {platformElt}
                </View>
                <View style={styles.description}>
                    <Text style={styles.overview} numberOfLines={4}>Description: {game.summary}</Text>
                </View>
                <View style={styles.details}>
                {/* <Button
                    onPress={() => {}}
                    title="More Details"
                    accessibilityLabel="Learn more about this purple button"
                /> */}
                <Button
                    raised
                    icon={{ name: 'cached' }}
                    backgroundColor='#5bf'
                    title='MORE DETAILS'
                    onPress={() => {}} />
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
    infos: {
        maxWidth: 200,
        padding: 10,
    },
    description: {
        margin: 10,
        textAlign: 'center',
        paddingTop: 10,
        paddingBottom: 10,
        borderTopWidth: 1,
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
        marginBottom: 5,
        paddingBottom: 5,
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
    details: {
        width: "100%",
    }
});