import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Entypo, Feather } from '@expo/vector-icons';

class BottomNavigation extends Component {

    handlePress = (tab) => {
        const { navigation } = this.props;
        navigation.navigate(tab);
    }

    render() {
        const activeColor = '#0076FF';
        const inactiveColor = '#424242';
        const { active } = this.props;
        const { parentStyle, tabConatinerStyle, iconContainerStyle } = styles;
        return (
            <View style={parentStyle}>
                <View style={tabConatinerStyle}>
                    <TouchableOpacity style={iconContainerStyle} onPress={() => this.handlePress('browse')}>
                        <Entypo
                            name="home"
                            size={24}
                            color={ active === 'browse' ? activeColor : inactiveColor }
                        />
                    </TouchableOpacity>
                </View>
                <View style={tabConatinerStyle}>
                    <TouchableOpacity style={iconContainerStyle} onPress={() => this.handlePress('map')}>
                        <Entypo
                            name="map"
                            size={24}
                            color={ active === 'map' ? activeColor : inactiveColor }
                        />
                    </TouchableOpacity>
                </View>
                <View style={tabConatinerStyle}>
                    <TouchableOpacity style={iconContainerStyle} onPress={() => this.handlePress('tickets')}>
                        <Entypo
                            name="ticket"
                            size={24}
                            color={ active === 'tickets' ? activeColor : inactiveColor }
                        />
                    </TouchableOpacity>
                </View>
                <View style={tabConatinerStyle}>
                    <TouchableOpacity style={iconContainerStyle} onPress={() => this.handlePress('profile')}>
                        <Feather
                            name="user"
                            size={24}
                            color={ active === 'profile' ? activeColor : inactiveColor }
                        />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    parentStyle: {
        paddingVertical: 5,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderTopWidth: 1,
        borderColor: '#E0E0E0'
    },
    tabConatinerStyle: {
        flexDirection: 'row'
    },
    iconContainerStyle: {
        padding: 5
    }
}

export { BottomNavigation };
