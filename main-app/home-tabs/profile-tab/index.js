import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BottomNavigation } from './components';

class ProfileTab extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                </View>
                <BottomNavigation navigation={navigation} active='profile' />
            </View>
        );
    }
}

export default ProfileTab;
