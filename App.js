import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import AppNavigator from './AppNavigator';
import HomeScreen from './Components/HomeScreen';
import TitleBar from './Components/TitleBar';
import BottomBar from './Components/BottomBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        {/* <TitleBar/> */}

        <AppNavigator />
        {/* <BottomBar nav={this.props.navigation}/> */}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(20,180,250,.2)',
  },
  footer: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
  }
});
