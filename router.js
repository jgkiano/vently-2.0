import { TabNavigator, StackNavigator } from 'react-navigation';

import * as Screens from './main-app';

const mainNavigatorOptions = {
    headerMode: 'none',
    cardStyle: {
        backgroundColor: 'white'
    }
};

const MainNavigator = StackNavigator({
    welcome: { screen: Screens.WelcomeScreen },
    login: { screen: Screens.LoginScreen }
}, mainNavigatorOptions);

export default MainNavigator;
