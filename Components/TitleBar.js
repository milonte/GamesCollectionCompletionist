import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Header, Icon } from 'react-native-elements';


export default class TitleBar extends React.Component {
    render() {
        return (
            <View style={styles.container}>
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
});