import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { getGCCApiData } from '../API/GCC_API';


export default class SuccessItem extends React.Component {
    constructor(props) {
        super(props);

    }

    /* componentWillMount() {
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
    } */

    render() {
        let success = this.props.success;
        let userSuccess = this.props.userSuccess;
        console.log(userSuccess);
        let userSuccessElt = <Text></Text>;
        if (userSuccess) {
            userSuccessElt = <Icon styles={styles.possessedIcon} name='check' type='font-awesome' color='green' />
        }
        return (
            <View style={styles.container}>
                {userSuccessElt}
                <Text>{success.name}</Text>
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