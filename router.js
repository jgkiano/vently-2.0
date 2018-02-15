import { TabNavigator, StackNavigator } from 'react-navigation';

import * as Screens from './main-app';

const mainNavigatorOptions = {
    headerMode: 'none',
    cardStyle: {
        backgroundColor: 'white'
    },
};

const MainNavigator = StackNavigator({


    init: { screen: Screens.InitScreen },
    welcome: { screen: Screens.WelcomeScreen },
    login: { screen: Screens.LoginScreen },

    firstEmailRegistration: { screen: Screens.FirstEmailRegistrationScreen },
    secondEmailRegistration: { screen: Screens.SecondEmailRegistrationScreen },

    emailLogin: { screen: Screens.EmailLoginScreen }
    
}, mainNavigatorOptions);

export default MainNavigator;
