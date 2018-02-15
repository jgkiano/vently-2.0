import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Item, Label, Input } from 'native-base';
import { BackButton, KeyBoardSpacer, FullButton } from './components';

class EmailLoginScreen extends Component {
    render() {
        const {
            parentStyle,
            formContainer,
            titleStyle,
            labelStyle,
            normalInputContainer,
            errorContainerStyle,
            errorTextStyle,
            buttonStyle
        } = styles;
        const {
            navigation
        } = this.props;
        return (
            <View style={parentStyle}>
                <View style={formContainer}>
                    <BackButton onPress={() => navigation.goBack()} />
                    <View>
                        <Text style={titleStyle}>Login to Vently</Text>
                    </View>
                    <View style={normalInputContainer}>
                        <Item floatingLabel error>
                            <Label style={labelStyle}>Email address</Label>
                            <Input
                                autoFocus
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="email-address"
                            />
                        </Item>
                    </View>
                    <View style={normalInputContainer}>
                        <Item floatingLabel error>
                            <Label style={labelStyle}>Password</Label>
                            <Input
                                secureTextEntry
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </Item>
                    </View>
                </View>
                <View style={errorContainerStyle}>
                    <Text style={errorTextStyle}>Sorry, the credentials you've provided are not valid. Please try again</Text>
                </View>
                <FullButton text="LOGIN" />
                <KeyBoardSpacer />
            </View>
        )
    }
}

const styles = {
    parentStyle: {
        flex: 1
    },
    formContainer: {
        flex: 1,
        paddingTop: 40,
        paddingHorizontal: 15
    },
    titleStyle: {
        fontFamily: 'nbold',
        fontSize: 32,
        color: '#424242'
    },
    labelStyle: {
        fontFamily: 'nregular' ,
        fontSize: 14,
        color: '#4FC3F7',
        opacity: 0.9
    },
    normalInputContainer: {
        marginTop: 10
    },
    errorContainerStyle: {
        paddingHorizontal: 15,
        paddingBottom: 5
    },
    errorTextStyle: {
        color: '#b71c1c',
        fontFamily: 'nregular'
    },
    buttonStyle: {
        backgroundColor: '#0076FF'
    },

}

export default EmailLoginScreen;
