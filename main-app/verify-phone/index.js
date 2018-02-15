import React, { Component } from 'react';
import { View, Text, Dimensions, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Item, Input } from 'native-base';

const SCREEN_HEIGHT = Dimensions.get('window').height;

class PhoneVerificationScreen extends Component {
    render() {
        const { assets } = this.props;
        const {
            parentStyle,
            headerStyle,
            imageStyle,
            contentContainerStyle,
            textStyle,
            formContainerStyle,
            labelStyle,
            inputContainerStyle,
            inputStyle,
            textButtonContainer,
            buttonTextStyle
        } = styles;
        return (
            <View style={parentStyle}>
                <View style={headerStyle}>
                    <Image source={assets.mailSent} style={imageStyle} resizeMode="contain" />
                </View>
                <View style={contentContainerStyle}>
                    <Text style={textStyle}>
                        We've sent you a verification code, just to confirm you're human 😉
                    </Text>
                    <View style={formContainerStyle}>
                        <Text style={labelStyle}>
                            Enter code here:
                        </Text>
                        <View>
                            <Item style={inputContainerStyle} regular>
                                <Input placeholderTextColor="#BDBDBD" autoFocus keyboardType="phone-pad" style={inputStyle} placeholder='2243' />
                            </Item>
                        </View>
                    </View>
                    <View style={textButtonContainer}>
                        <TouchableOpacity>
                            <Text style={buttonTextStyle}>Resend Code</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    parentStyle: {
        flex: 1
    },
    headerStyle: {
        backgroundColor: '#EEEEEE',
        height: SCREEN_HEIGHT / 4.5,
        justifyContent: 'flex-end',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#E0E0E0'
    },
    imageStyle: {
        position: 'relative',
        width: 90,
        height: 90,
        top: 25,
        zIndex: 1
    },
    contentContainerStyle: {
        flex: 1,
        marginTop: 25,
        padding: 30
    },
    textStyle: {
        textAlign: 'center',
        ontFamily: 'nsemibold',
        fontSize: 18,
        color: '#8F8E94'
    },
    formContainerStyle: {
        marginTop: 30
    },
    labelStyle: {
        fontFamily: 'nregular',
        fontSize: 14,
        color: '#0076FF',
        textAlign: 'center'
    },
    inputContainerStyle: {
        height: 40,
        marginTop: 10
    },
    inputStyle: {
        fontSize: 14,
        fontFamily: 'nregular'
    },
    textButtonContainer: {
        flexDirection: 'row'
    },
    buttonTextStyle: {
        fontFamily: 'nregular',
        fontSize: 14,
        color: '#0076FF',
        extAlign: 'left',
        marginTop: 15
    }
}
export default connect(({ init }) => ({ assets: init.assets }), null)(PhoneVerificationScreen);
