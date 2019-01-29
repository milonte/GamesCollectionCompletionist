import React, { Component } from 'react';
import { StyleSheet, Button, View, Image } from 'react-native';
import { Text, Icon } from 'react-native-elements';
import * as Progress from 'react-native-progress';
import { LinearGradient } from 'expo';
import { getGccApiAllSuccesses, getGccApiUserSuccesses, getGCCApiDatas } from '../API/GCC_API';

export default class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            successes: [],
            userSuccesses: [],
            possessedGames: null,
            wantedGames: null,
        };
    }

    componentDidMount() {
        getGccApiAllSuccesses()
            .then(data => {
                this.setState({ successes: data });
            });
        getGccApiUserSuccesses(1)
            .then(data => {
                this.setState({ userSuccesses: data });
            });
        getGCCApiDatas("possess")
            .then(data => {
                this.setState({ possessedGames: data.length });
            });
        getGCCApiDatas("wanted")
            .then(data => {
                this.setState({ wantedGames: data.length });
            });
    }

    render() {
        let possessedGamesCount = this.state.possessedGames;
        let wantedGamesCount = this.state.wantedGames;
        let userSuccessCount = this.state.userSuccesses.length;
        let successCount = this.state.successes.length;
        let progressValue = userSuccessCount / successCount;
        if (!(progressValue > 0)) {
            progressValue = 0;
        }
        return (
            <View style={styles.container}>
                <View style={styles.content}>


                        <View style={styles.welcomeLine}>
                            <Text style={styles.welcomeText}>Welcome back</Text>
                            <Text style={styles.userText}>USER</Text>
                            <Image style={{width: 300, height: 200}} source={require('../assets/logo.png')} />
                        </View>
                    <View style={styles.stats}>

                        <LinearGradient colors={['#232526', '#414345']} start={[1, 0]} style={styles.statsLine}>
                            <Text style={styles.statsText}>Your statistics</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#480048', '#C04848']} start={[1, 0]} style={styles.possessLine}>
                            <Icon styles={styles.icon} name='check' type='font-awesome' color='white' size={40} />
                            <Text style={styles.possessText}>{possessedGamesCount} games in your collection</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#5f2c82', '#49a09d']} start={[1, 0]} style={styles.wantedLine}>
                            <Icon styles={styles.icon} name='bookmark' type='font-awesome' color='white' size={40} />
                            <Text style={styles.wantedText}>{wantedGamesCount} games in your wanted list</Text>
                        </LinearGradient>
                        <LinearGradient colors={['#046020', '#719941']} start={[1, 0]} style={styles.barLine}>
                            <Text style={styles.barText}>{userSuccessCount} successes on {successCount} complete !</Text>
                            <Progress.Bar
                                progress={progressValue}
                                width={300}
                                height={15}
                                borderRadius={5}
                                color='white'
                            />
                        </LinearGradient>
                    </View>

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,.8)',
    },
    content: {
        flex: 1,
    },
    stats: {
        position: 'absolute',
        bottom: 0,
    },
    welcomeLine: {
        paddingBottom: 30,
        alignSelf: 'center',
    },
    welcomeText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 25,
        fontWeight: 'bold',
        paddingTop: 15,
    },
    userText: {
        textAlign: 'center',
        color: 'orange',
        fontSize: 30,
        fontWeight: 'bold',
    },
    statsLine: {
        alignSelf: 'stretch',
        padding: 5,
        paddingLeft: 50,
        borderWidth: 1,
        backgroundColor: 'black',
        borderColor: 'rgba(0,0,0,.8)',
    },
    possessLine: {
        flexDirection: 'row',
        padding: 30,
        borderWidth: 1,
        borderColor: 'rgba(100,0,0,.8)',
    },
    wantedLine: {
        flexDirection: 'row',
        padding: 30,
        backgroundColor: '#5bf',
        borderColor: 'rgba(36, 89, 87,.8)',
    },
    barLine: {
        alignContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        padding: 30,
        borderWidth: 1,
        backgroundColor: 'orange',
        borderColor: 'rgba(0,100,0,.8)',
    },
    icon: {
    },
    statsText: {
        color: 'white',
        fontSize: 15,
        fontWeight: 'bold',
    },
    possessText: {
        color: 'white',
        paddingBottom: 5,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 15,
    },
    wantedText: {
        color: 'white',
        paddingBottom: 5,
        fontSize: 18,
        textAlign: 'center',
        fontWeight: 'bold',
        paddingTop: 5,
        paddingLeft: 15,
    },
    barText: {
        color: 'white',
        paddingBottom: 5,
        fontSize: 18,
        fontWeight: 'bold',
    },
});