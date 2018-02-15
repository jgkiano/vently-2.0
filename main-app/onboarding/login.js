import React, { Component } from 'react';
import { View, Text } from 'react-native';

const LOGO = require('./assets/vently-logo.png');

class LoginScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image source />
                <Text style={{ fontFamily: 'nbold', fontSize: 22, color: '#030303', marginBottom: 20 }}>Login to Vently</Text>
            </View>
        );
    }
}

export default LoginScreen;
