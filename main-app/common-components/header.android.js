import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Platform, StatusBar } from 'react-native';
import { BackButton } from './';

class Header extends Component {

    renderLeftComponent = () => {
        const { leftContainerStyle } = styles;

        if(this.props.backNavigation) {
            return (
                <View style={{ ...leftContainerStyle, top: 2 }}>
                    <BackButton onPress={() => this.props.backNavigation.goBack()} />
                </View>
            );
        }

        if(this.props.leftComponent) {
            return (
                <View style={leftContainerStyle}>
                    {this.props.leftComponent()}
                </View>
            );
        }
        return <View style={leftContainerStyle} />
    }

    renderCenterComponent = () => {
        const { centerContainerStyle } = styles;
        if(this.props.centerComponent) {
            return (
                <View style={centerContainerStyle}>
                    {this.props.centerComponent()}
                </View>
            );
        }
        return <View style={{ flex: 1 }} />
    }

    renderRightComponent = () => {
        const { rightContainerStyle } = styles;
        if(this.props.rightComponent) {
            return (
                <View style={rightContainerStyle}>
                    {this.props.rightComponent()}
                </View>
            );
        }
        return <View style={rightContainerStyle} />
    }
    render() {
        const { parentStyle } = styles;
        return (
            <View style={parentStyle}>
                {this.renderLeftComponent()}
                {this.renderCenterComponent()}
                {this.renderRightComponent()}
            </View>
        );
    }
}

const styles = {
    parentStyle: {
        backgroundColor: '#F5F5F5',
        borderBottomWidth: 1,
        borderColor: '#E0E0E0',
        flexDirection: 'row',
        paddingTop: StatusBar.currentHeight,
        height: 80,
        alignItems: 'center',
        paddingHorizontal: 15
    },
    leftContainerStyle: {
        alignItems: 'flex-start',
        flex: 0.5
    },
    centerContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 3
    },
    rightContainerStyle: {
        alignItems: 'flex-end',
        flex: 0.5
    }
}

export { Header };
