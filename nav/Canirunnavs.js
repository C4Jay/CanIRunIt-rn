import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import GameSwitch from '../components/gameswitch';
import Home from '../components/home';
import Gamelist from '../components/gamelist';
import Gamepost from '../components/gamepost';

const Canirunnav = createStackNavigator({
    landingpage: Home,
    gameswitch: GameSwitch,
    gamelist: Gamelist,
    gamepost: Gamepost
}, {headerLayoutPreset: 'center'})

export default createAppContainer(Canirunnav);