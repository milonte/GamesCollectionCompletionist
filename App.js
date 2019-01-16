import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Search from './Components/Search'
import Navbar from './Components/Navbar'

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Navbar/>
        <Search/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(20,180,250,.2)',
  },
});
