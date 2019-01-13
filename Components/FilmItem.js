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
                    source={{uri: 'https://visualstudio.microsoft.com/wp-content/uploads/2016/06/android-1-562x309@2x-op-800x404.png'}}
                />
                </View>    
                <View style={styles.description}>
                    <Text style={styles.title}>{film.title}</Text>
                    <Text style={styles.overview} numberOfLines={4}>Description: {film.overview}</Text>
                    <Text style={styles.date}>Date: {film.release_date}</Text>
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
        maxWidth: 270,
        padding: 10,
    },
    illustration: {
        alignItems: 'center',
        width: 50, 
        height: 50,
        margin: 10,
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