
import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';
import { Icon } from 'react-native-elements';
import PossessedGames from './PossessedGames';
import WantedGames from './WantedGames';

const LibraryNavigator = createBottomTabNavigator({
    PossessedGames: {
        screen: PossessedGames,
        navigationOptions: {
            title: 'I Have',
            tabBarIcon: ({ focused, tintColor }) => {
              return <Icon name='check' type='font-awesome' color={tintColor} />;
            },
          },
    },
    WantedGames:{
        screen:  WantedGames,
        navigationOptions: {
            title: 'I Want',
            tabBarIcon: ({ focused, tintColor }) => {
              return <Icon name='bookmark' type='font-awesome' color={tintColor} />;
            },
          },
    },
}, {
    tabBarOptions: {
      showIcon: true,
      activeTintColor: '#5bf',
      inactiveTintColor: 'gray',
    },
  });

Library = createAppContainer(LibraryNavigator);
export default Library;