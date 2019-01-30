
import React, { Component } from 'react';
import { createBottomTabNavigator, createAppContainer, createMaterialTopTabNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import PossessedGames from './PossessedGames';
import WantedGames from './WantedGames';

const LibraryNavigator = createMaterialTopTabNavigator({
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
      showLabel: false,
      showIcon: true,
      activeTintColor: 'white',
      inactiveTintColor: '#5bf',
      style: {
        backgroundColor: "#444",
        indicatorStyle: {
          color: 'red',
        }
      },
      indicatorStyle: {
        height: 50,
        backgroundColor: "#5bf",
      }
    },
  });

Library = createAppContainer(LibraryNavigator);
export default Library;