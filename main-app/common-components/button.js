import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';

class Button extends Component {

    _renderButtonBackground = () => Platform.Version >= 21 ? TouchableNativeFeedback.Ripple() : TouchableNativeFeedback.SelectableBackground()

    render() {
        if(Platform.OS === 'ios') {
            return (
                <TouchableOpacity onPress={this.props.onPress} style={{ backgroundColor: '#0076FF', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 4 }}>
                    <Text style={{ color: 'white', fontFamily: 'nregular', fontSize: 18 }}>{this.props.text}</Text>
                </TouchableOpacity>
            );
        }
        return (
            <TouchableNativeFeedback onPress={this.props.onPress} background={this._renderButtonBackground()}>
                <View style={{ backgroundColor: '#0076FF', paddingVertical: 15, paddingHorizontal: 40, borderRadius: 4 }}>
                    <Text style={{ color: 'white', fontFamily: 'nregular', fontSize: 18 }}>{this.props.text}</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }
}

export { Button };
