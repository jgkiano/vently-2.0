import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TouchableNativeFeedback, Platform } from 'react-native';
import { Spinner } from 'native-base';

class FullButton extends Component {

    _renderButtonBackground = () => Platform.Version >= 21 ? TouchableNativeFeedback.Ripple() : TouchableNativeFeedback.SelectableBackground()

    handlePress = () => {
        if(!this.props.loading && this.props.onPress) {
            this.props.onPress();
        }
    }
    renderContent = () => {
        if(this.props.loading) {
            return <Spinner color="#0076FF" />
        }
        return <Text style={{ fontFamily: 'nbold', color:'white' }}>{this.props.text}</Text>
    }
    render() {
        const buttonStyle = {
            backgroundColor: this.props.loading ? '#F5F5F5' :'#0076FF',
            justifyContent: 'center',
            alignItems: 'center',
            height: 55
        }
        if(Platform.OS === 'ios') {
            return (
                <TouchableOpacity onPress={this.handlePress} style={buttonStyle}>
                    {this.renderContent()}
                </TouchableOpacity>
            );
        }
        return (
            <TouchableNativeFeedback onPress={this.handlePress} background={this._renderButtonBackground()}>
                <View style={buttonStyle}>
                    {this.renderContent()}
                </View>
            </TouchableNativeFeedback>
        );
    }
}

export { FullButton };
