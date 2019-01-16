import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search';
import TitleBar from './Components/TitleBar';
import BottomBar from './Components/BottomBar';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <TitleBar/>
        <Search/>
        <View style={styles.footer}>

        <BottomBar />
        </View>
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
