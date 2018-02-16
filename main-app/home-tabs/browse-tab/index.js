import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { BottomNavigation, Header } from './components';
import { Entypo, Feather } from '@expo/vector-icons';

class BrowseTab extends Component {

    _renderCenterComponent = () => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'nregular', color: '#212121', fontSize: 16 }}>Selected for you</Text>
                <View style={{ position: 'relative', top: 2}}>
                    <Entypo name="chevron-small-down" size={24} color="#212121" />
                </View>
            </TouchableOpacity>
        );
    }

    _renderRightComponent = () => {
        return (
            <TouchableOpacity>
                <Feather name="filter" size={24} color="#212121" />
            </TouchableOpacity>
        )
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header
                        centerComponent={this._renderCenterComponent}
                        rightComponent={this._renderRightComponent}
                    />
                </View>
                <BottomNavigation navigation={navigation} active='browse' />
            </View>
        );
    }
}

export default BrowseTab;
