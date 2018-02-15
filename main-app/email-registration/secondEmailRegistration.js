import React, { Component } from 'react';
import { View, Text, Keyboard } from 'react-native';
import { Item, Label, Input } from 'native-base';
import { BackButton, KeyBoardSpacer, FullButton } from './components';

class SecondEmailRegistrationScreen extends Component {
    componentWillMount() {
        Keyboard.dismiss();
    }
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
                        <Text style={titleStyle}>Create an account</Text>
                    </View>
                    <View style={normalInputContainer}>
                        <Item error>
                            <Label style={labelStyle}>Phone Number</Label>
                            <Input
                                placeholderTextColor="#BDBDBD"
                                placeholder="0700110590"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="phone-pad"
                                autoFocus
                            />
                        </Item>
                    </View>
                    <View style={normalInputContainer}>
                        <Item floatingLabel>
                            <Label style={labelStyle}>Password</Label>
                            <Input
                                secureTextEntry
                                keyboardType="email-address"
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </Item>
                    </View>
                    <View style={normalInputContainer}>
                        <Item floatingLabel>
                            <Label style={labelStyle}>Confirm Password</Label>
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
                    <Text style={errorTextStyle}>Phone number already in use</Text>
                </View>
                <FullButton onPress={() => navigation.navigate('phoneVerification')} text="CREATE YOUR ACCOUNT" />
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

export default SecondEmailRegistrationScreen;
