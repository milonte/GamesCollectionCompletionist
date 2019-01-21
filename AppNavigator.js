import { createStackNavigator, createAppContainer } from 'react-navigation';
import Home from './Components/HomeScreen';
import GameItem from './Components/GameItem';
import Search from './Components/Search';
import GameFullDescription from './Components/GameFullDescription';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
/*   GameItem: { screen: GameItem }, */
  Search: { screen: Search },
  GameDetails: { screen: GameFullDescription },
});

export default createAppContainer(AppNavigator);