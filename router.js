import { TabNavigator, StackNavigator } from 'react-navigation';
import React, { Component } from 'react';
import { Text } from 'react-native';
import * as Screens from './main-app';

const mainNavigatorOptions = {
    headerMode: 'none',
    cardStyle: {
        backgroundColor: '#FAFAFA'
    },
};

const tabNavigatorOptions = {
    animationEnabled: false,
    swipeEnabled: false,
    navigationOptions: {
        tabBarVisible: false
    }
}

const MainNavigator = StackNavigator({

    home: { screen: TabNavigator({
        browse: { screen: Screens.BrowseTab },
        map: { screen: Screens.MapTab },
        tickets: { screen: Screens.TicketsTab },
        profile: { screen: Screens.ProfileTab }
    }, tabNavigatorOptions)},

    filter: { screen: Screens.FilterScreen },
    // home: { screen: Screens.HomeScreen },


    init: { screen: Screens.InitScreen },
    welcome: { screen: Screens.WelcomeScreen },
    login: { screen: Screens.LoginScreen },

    firstEmailRegistration: { screen: Screens.FirstEmailRegistrationScreen },
    secondEmailRegistration: { screen: Screens.SecondEmailRegistrationScreen },
    phoneVerification: { screen: Screens.PhoneVerificationScreen },

    emailLogin: { screen: Screens.EmailLoginScreen },

    interestsSelections: { screen: Screens.InterestsSelectionScreen },





}, mainNavigatorOptions);

export default MainNavigator;
