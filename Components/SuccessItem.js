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
        let successStyle = styles.noGetSuccess;
        let userSuccessElt = <Icon raised styles={styles.possessedIcon} name={success.image_url} type='font-awesome' color='grey' size={20} />;
        if (userSuccess) {
            successStyle = styles.getSuccess;
            userSuccessElt = <Icon raised styles={styles.possessedIcon} name={success.image_url} type='font-awesome' color='green' size={25} />
        }
        return (
            <View style={styles.container}>
                <View style={successStyle}>
                    <View>
                        {userSuccessElt}
                    </View>
                    <View style={styles.infos}>
                        <View style={styles.title}>
                            <Text style={styles.titleText}>{success.title}</Text>
                        </View>
                        <Text style={styles.description}>{success.description}</Text>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
    },
    noGetSuccess: {
        backgroundColor: '#eee',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: 'rgba(0,0,0,.1)',
        marginBottom: 5,
    },
    getSuccess: {
        backgroundColor: 'white',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderWidth: 1,
        borderColor: 'green',
        //backgroundColor: 'rgba(50,180,100,.1)',
        marginBottom: 5,
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
        fontSize: 17,
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
        paddingTop: 5,
    },
    possessedText: {
        alignItems: 'center',
        color: 'green',
        alignSelf: 'center',
        marginLeft: 10,
    },
    wantedText: {
        color: '#5bf',
        alignSelf: 'center',
        marginLeft: 10,
    },
    description: {
        paddingTop: 5,
        paddingLeft: 20,
    }
});