import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';


export default class Navbar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                {/* <View style={styles.title}>
                    <Text style={styles.title}>Games Collectionist</Text>
                </View>
                <View style={styles.icons}>
                    <Icon
                        name='sign-out'
                        type='font-awesome'
                        color='#5bf'
                        onPress={() => {} }
                    />
                </View> */}
                <Header
                leftComponent={{ icon: 'menu', color: '#fff' }}
                centerComponent={{ text: 'GAME COLLECTION', style: { color: '#fff' } }}
                rightComponent={ <Icon
                        name='sign-out'
                        type='font-awesome'
                        color='#5bf'
                        onPress={() => {} } /> }
                outerContainerStyles={styles.container} 
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
   container: {
        backgroundColor: 'rgba(0,0,0,.6)',
        paddingTop: 10,
    },
     /* title: {
        textAlign: 'center',
        flex: 5,
        paddingLeft: 20,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20,
    },
    icons: {
        flex: 2,
    }, */
    button: {
    },
    loginIcon: {
        /* width: 70,
        height: 30, */
    }
});