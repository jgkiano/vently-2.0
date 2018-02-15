import { TabNavigator, StackNavigator } from 'react-navigation';

import * as Screens from './main-app';

const mainNavigatorOptions = {
    headerMode: 'none',
    cardStyle: {
        backgroundColor: 'white'
    },
};

const MainNavigator = StackNavigator({

    firstEmailRegistration: { screen: Screens.FirstEmailRegistrationScreen },

    init: { screen: Screens.InitScreen },
    welcome: { screen: Screens.WelcomeScreen },
    login: { screen: Screens.LoginScreen },

    // firstEmailRegistration: { screen: Screens.FirstEmailRegistrationScreen }

}, mainNavigatorOptions);

export default MainNavigator;
