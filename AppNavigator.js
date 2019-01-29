import React, { Component } from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import { createMaterialBottomTabNavigator } from 'react-navigation-material-bottom-tabs'
import { Icon } from 'react-native-elements';
import Home from './Components/HomeScreen';
import Search from './Components/Search';
import Library from './Components/Library';
import Success from './Components/Success';
import GameFullDescription from './Components/GameFullDescription';
import { View, Image, Text } from 'react-native';


class LogoTitle extends React.Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: 'row' }}>
      <Image
        source={require('./assets/miniLogo.png')}
        style={{ width: 30, height: 30, marginLeft: 10 }}
      />
      <Text style={{ fontSize: 18, color: "#888", paddingLeft: 15 }}>Games Collector</Text>
      <View style={{ position: 'absolute', right: 20 }}>
        <Icon name='sign-out' type='font-awesome' color='#aaa' />
      </View>
      </View>
    );
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: createMaterialBottomTabNavigator({
      Home: {
        screen: Home,
        navigationOptions: {
          title: 'Home',
          tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name='home' type='font-awesome' color={tintColor} />;
          },
          tabBarColor: "#111",
        },
      },
      Search: {
        screen: Search,
        navigationOptions: {
          title: 'Search',
          tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name='search' type='font-awesome' color={tintColor} />;
          },
          tabBarColor: "#222",
        },
      },
      Library: {
        screen: Library,
        navigationOptions: {
          title: 'Library',
          tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name='folder-o' type='font-awesome' color={tintColor} />;
          },
          tabBarColor: "#333",
        },
      },
      Success: {
        screen: Success,
        navigationOptions: {
          title: 'Success',
          tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name='trophy' type='font-awesome' color={tintColor} />;
          },
          tabBarColor: "#444",
        },
      }
    },
      {
        navigationOptions: {
          /* header: null, */
           headerStyle: {
             backgroundColor: "#111",
           },
           headerTintColor: '#fff',
           headerTitleStyle: {
             fontWeight: 'bold',
           },
          headerTitle: <LogoTitle />,
        },
        activeTintColor: '#f0edf6',
        inactiveTintColor: '#888',
        barStyle: {
          backgroundColor: '#333',
          borderTopWidth: 1,
          borderColor: "#ccc",
        }
      }
    )
  },
  Search: { screen: Search },
  GameDetails: { screen: GameFullDescription },
});


export default createAppContainer(AppNavigator);