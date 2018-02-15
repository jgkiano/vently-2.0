import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';

class BackButton extends Component {
    render() {
        return (
            <TouchableOpacity style={{ padding: 3 }} onPress={() => this.props.onPress()}>
                <Icon android="md-arrow-back" ios="ios-arrow-back" style={{ color: this.props.light ? 'white' : '#9E9E9E' }} />
            </TouchableOpacity>
        );
    }
}

export { BackButton };
