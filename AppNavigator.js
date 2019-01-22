import React, { Component } from 'react';
import { createBottomTabNavigator, createStackNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import Home from './Components/HomeScreen';
import Search from './Components/Search';
import Library from './Components/Library';
import GameFullDescription from './Components/GameFullDescription';

const AppNavigator = createStackNavigator({
  Home: {
    screen: createBottomTabNavigator({
      Home: {
        screen: Home,
        navigationOptions: {
          title: 'Home',
          tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name='home' type='font-awesome' color={tintColor} />;
          },
        },
      },
      Search: {
        screen: Search,
        navigationOptions: {
          title: 'Search',
          tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name='search' type='font-awesome' color={tintColor} />;
          },
        },
      },
      Library: {
        screen: Library,
        navigationOptions: {
          title: 'Library',
          tabBarIcon: ({ focused, tintColor }) => {
            return <Icon name='folder-o' type='font-awesome' color={tintColor} />;
          },
        },
      },
    }, {
        tabBarOptions: {
          showIcon: true,
          activeTintColor: '#5bf',
          inactiveTintColor: 'gray',
        },
      })
  },
  Search: { screen: Search },
  GameDetails: { screen: GameFullDescription },
});


export default createAppContainer(AppNavigator);