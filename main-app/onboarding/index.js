import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { Slider } from './components'

const LOGO = require('./assets/vently-logo.png');
const TICKETS_IMAGE = require('./assets/ticketing.png');
const HEART = require('./assets/like.png');

const SLIDER_DATA = [
    {
        title: 'WELCOME TO VENTLY!',
        content: 'All the events and activities near you at your fingertips. Find out what’s happening when it’s happening and be a part of it all!',
        image: LOGO,
        imageStyle: {
            width: 84,
            height: 93
        }
    },
    {
        title: 'TICKETS FOR EVERYONE',
        content: 'Get tickets for you, friends and family right here in the app and forget about the hassle of printing tickets.',
        image: TICKETS_IMAGE,
        imageStyle: {
            width: 129,
            height: 94
        }
    },
    {
        title: 'DISCOVER WHAT YOU LOVE',
        content: 'The more you use Vently the more it gets to know you. Discover events and activities that you are interested in.',
        image: HEART,
        imageStyle: {
            width: 90,
            height: 90
        }
    },
];

class WelcomeScreen extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <Slider
                    slides={SLIDER_DATA}
                    callToActionText="Get Started"
                    onCallToActionPress={() => navigation.navigate('login')}
                />
            </View>

        );
    }
}

export default WelcomeScreen;
