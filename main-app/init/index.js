import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { connect } from 'react-redux';
import { startApp } from './actions';

class InitScreen extends Component {
    componentDidMount() {
        this.props.startApp(this.props.navigation);
    }
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text>Loading...</Text>
            </View>
        );
    }
}

export default connect(null, { startApp })(InitScreen);
