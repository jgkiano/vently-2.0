import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Button, Icon } from 'native-base';

class LoginScreen extends Component {
    render() {
        const { assets } = this.props;
        const {
            parentContainerStyle,
            imageStyle,
            headerTextStyle,
            socialButtonsStyle,
            iconStyle,
            buttonTextStyle,
            orContainserStyle,
            normalTextStyle,
            emailButtonStyle,
            bottomTextContainerStyle,
            textStyle,
            textButtonStyle
        } = styles;
        return (
            <View style={parentContainerStyle}>
                <Image source={assets.ventlyLogo} style={imageStyle} />
                <Text style={headerTextStyle}>Login to Vently</Text>
                <View>
                    <Button iconLeft style={socialButtonsStyle}>
                        <Icon name='logo-facebook' style={iconStyle} />
                        <Text style={buttonTextStyle}>Connect with Facebook</Text>
                    </Button>
                </View>
                <View>
                    <Button iconLeft style={socialButtonsStyle}>
                        <Icon name='logo-google' style={iconStyle} />
                        <Text style={buttonTextStyle}>Connect with Google</Text>
                    </Button>
                </View>
                <View style={orContainserStyle}>
                    <Text style={normalTextStyle}>or</Text>
                </View>
                <View>
                    <Button iconLeft style={emailButtonStyle}>
                        <Icon android='md-mail' ios="ios-mail" style={iconStyle} />
                        <Text style={buttonTextStyle}>Login with Email</Text>
                    </Button>
                </View>
                <View style={bottomTextContainerStyle}>
                    <Text style={textStyle}>No account? </Text>
                    <TouchableOpacity>
                        <Text style={textButtonStyle}>Sign up here.</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

const styles = {
    parentContainerStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    imageStyle: {
        width: 84,
        height: 93
    },
    headerTextStyle: {
        fontFamily: 'nbold',
        fontSize: 20,
        color: '#424242',
        marginVertical: 20
    },
    socialButtonsStyle: {
        width: 245,
        marginBottom: 15,
        justifyContent: 'flex-start',
        backgroundColor: '#0076FF'
    },
    iconStyle: {
        paddingRight: 15
    },
    buttonTextStyle: {
        color: 'white',
        fontFamily: 'nregular'
    },
    orContainserStyle: {
        marginVertical: 10
    },
    normalTextStyle: {
        fontSize: 18,
        color: '#8F8E94'
    },
    emailButtonStyle: {
        width: 245,
        marginTop: 15,
        justifyContent: 'flex-start',
        backgroundColor: '#8F8E94'
    },
    bottomTextContainerStyle: {
        marginTop: 30,
        flexDirection: 'row'
    },
    textStyle: {
        fontFamily: 'nregular'
    },
    textButtonStyle: {
        color: '#0076FF',
        fontFamily: 'nregular'
    }
}

function mapStateToProps({ init }) {
    return { assets: init.assets };
}

export default connect(mapStateToProps, null)(LoginScreen);
