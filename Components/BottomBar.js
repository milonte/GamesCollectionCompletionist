import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Header, Icon, Text } from 'react-native-elements';

export default class BottomBar extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        let nav = this.props.nav;
        return (
            <View style={styles.container}>
                <Header
                    outerContainerStyles={styles.bottomBarOuter}
                    innerContainerStyles={styles.bottomBarInner}
                    leftComponent={
                        <View>
                            <Icon name='search' type='font-awesome' color='#5bf' onPress={() => { }} />
                            <Text style={styles.text}>Search</Text>
                        </View>
                    }
                    centerComponent={
                        <View>
                            <Icon name='folder-o' type='font-awesome' color='#5bf' onPress={() => { }} />
                            <Text style={styles.text}>Library</Text>
                        </View>
                    }
                    rightComponent={
                        <View>
                            <Icon name='gear' type='font-awesome' color='#5bf'  onPress={() =>
                                nav.navigate('GameDetails')
                            } />
                            <Text style={styles.text}>Settings</Text>
                        </View>
                    }
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
    },
    bottomBarOuter: {
        paddingLeft: 40,
        paddingRight: 40,
        height: 60,
        backgroundColor: 'rgba(0,0,0,.7)',
    },
    bottomBarInner: {
        marginTop: 20,
    },
    text: {
        marginTop: 0,
        color: 'white',
    }
})
