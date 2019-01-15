import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

export default class FilmItem extends React.Component {
    render() {
        let film = this.props.film;
        return (
            <View style={styles.container}>        
            <View style={styles.illustration}>
                <Image
                    style={styles.illustration}
                    source={{uri: 'https:'+film.cover.url }}
                />
                </View>    
                <View style={styles.description}>
                    <Text style={styles.title}>{film.name}</Text>
                    <Text style={styles.overview} numberOfLines={4}>Description: {film.summary}</Text>
                    <Text style={styles.date}>Date: {film.release_dates[0].m} {film.release_dates[0].y}</Text>
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
    },
    description: {
        maxWidth: 220,
        padding: 10,
    },
    illustration: {
        alignItems: 'center',
        width: 80, 
        height: 80,
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
        textAlign: 'right',
        marginTop: 5,
        paddingTop: 5,
        borderTopWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        fontStyle: 'italic',
    }
});