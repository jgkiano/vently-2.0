import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { BottomNavigation } from './components';

class TicketsTab extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                </View>
                <BottomNavigation navigation={navigation} active='tickets' />
            </View>
        );
    }
}

export default TicketsTab;
