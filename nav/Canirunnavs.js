import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GameSwitch from '../components/gameswitch';
import Home from '../components/home';
import Gamelist from '../components/gamelist';

const Canirunnav = createStackNavigator({
    landingpage: Home,
    gameswitch: GameSwitch,
    gamelist: Gamelist
}, {headerLayoutPreset: 'center'})

export default createAppContainer(Canirunnav);