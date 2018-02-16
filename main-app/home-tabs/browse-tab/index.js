import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomNavigation, Header } from './components';

class BrowseTab extends Component {
    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header />
                </View>
                <BottomNavigation navigation={navigation} active='browse' />
            </View>
        );
    }
}

export default BrowseTab;
