import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import { Slider } from './components';

class WelcomeScreen extends Component {
    render() {
        const { navigation, assets } = this.props;
        const SLIDER_DATA = [
            {
                title: 'Welcome to Vently!',
                content: 'All the events and activities near you at your fingertips. Find out what’s happening when it’s happening and be a part of it all!',
                image: assets.ventlyLogo,
                imageStyle: {
                    width: 84,
                    height: 93
                }
            },
            {
                title: 'Tickets for everyone',
                content: 'Get tickets for you, friends and family right here in the app and forget about the hassle of printing tickets.',
                image: assets.tickets,
                imageStyle: {
                    width: 129,
                    height: 94
                }
            },
            {
                title: 'Discover what you love',
                content: 'The more you use Vently the more it gets to know you. Discover events and activities that you are interested in.',
                image: assets.like,
                imageStyle: {
                    width: 90,
                    height: 90
                }
            },
        ];

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

function mapStateToProps({ init }) {
    return { assets: init.assets };
}

export default connect(mapStateToProps, null)(WelcomeScreen);
