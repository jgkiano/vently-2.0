import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Item, Label, Input } from 'native-base';
import { BackButton, KeyBoardSpacer, FullButton } from './components';

class FirstEmailRegistrationScreen extends Component {
    render() {
        const {
            parentStyle,
            formContainer,
            titleStyle,
            formGroupContainer,
            leftFormGroupInputStyle,
            rightFormGroupInputStyle,
            labelStyle,
            normalInputContainer,
            errorContainerStyle,
            errorTextStyle,
            buttonStyle
        } = styles;
        return (
            <View style={parentStyle}>
                <View style={formContainer}>
                    <BackButton />
                    <View>
                        <Text style={titleStyle}>Create an account</Text>
                    </View>
                    <View style={formGroupContainer}>
                        <View style={leftFormGroupInputStyle}>
                            <Item floatingLabel>
                                <Label style={labelStyle}>First name</Label>
                                <Input keyboardType="email-address" autoCorrect={false} autoFocus />
                            </Item>
                        </View>
                        <View style={rightFormGroupInputStyle}>
                            <Item floatingLabel>
                                <Label style={labelStyle}>Last name</Label>
                                <Input keyboardType="email-address" autoCorrect={false} />
                            </Item>
                        </View>
                    </View>
                    <View style={normalInputContainer}>
                        <Item floatingLabel error>
                            <Label style={labelStyle}>Email Address</Label>
                            <Input autoCapitalize="none" autoCorrect={false} keyboardType="email-address" />
                        </Item>
                    </View>
                    <View style={normalInputContainer}>
                        <Item floatingLabel>
                            <Label style={labelStyle}>Username</Label>
                            <Input keyboardType="email-address" autoCapitalize="none" autoCorrect={false} />
                        </Item>
                    </View>
                </View>
                <View style={errorContainerStyle}>
                    <Text style={errorTextStyle}>Email address already in use</Text>
                </View>
                <FullButton text="CONTINUE" />
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
    formGroupContainer: {
        flexDirection: 'row'
    },
    leftFormGroupInputStyle: {
        flex: 1,
        paddingRight: 5
    },
    rightFormGroupInputStyle: {
        flex: 1,
        paddingLeft: 5
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

export default FirstEmailRegistrationScreen;
