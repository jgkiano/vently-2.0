import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, TouchableWithoutFeedback, Animated } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

class EventCard extends Component {

    state ={
        fadeAnim: new Animated.Value(1),
        loading: true
    }

    componentWillMount() {
        this._animateSensei();
    }

    _animateSensei = () => {
        if(this.state.loading) {
            const { fadeAnim } = this.state;
            const fadeInAnim = Animated.timing( fadeAnim, { toValue: 1, duration: 600 });
            const fadeOutAnim = Animated.timing( fadeAnim, { toValue: 0.5, duration: 600 });
            fadeOutAnim.start(() => {
                fadeInAnim.start(() => {
                    this._animateSensei();
                });
            });
        }
    }

    _renderAnimatedPlaceholder = () => {

        const { placeholderContainerStyle, errorTextStyle } = styles
        if(this.state.loading) {
            return (
                <Animated.View
                    style={{
                        ...placeholderContainerStyle,
                        opacity: this.state.fadeAnim
                    }}
                />
            );
        }
        if(this.state.error) {
            return (
                <View style={placeholderContainerStyle}>
                    <Text style={errorTextStyle}>
                        Could not load banner, please check your internet connection
                    </Text>
                </View>
            );
        }
        return null;
    }

    render() {

        const {
            date,
            locationName,
            name,
            price,
            banner,
            onEventPress,
            onBookmarkPress,
            onSharePress
        } = this.props;

        const {
            parentContainerStyle,
            imageStyle,
            contentContainerStyle,
            actionsContainerStyle,
            actionContainerStyle,
            iconStyle,
            metaTextStyle,
            nameTextStyle,
            priceTextStyle
        } = styles;

        return (
            <View>
                <View style={parentContainerStyle}>
                    <TouchableWithoutFeedback onPress={onEventPress}>
                        <View>
                            {this._renderAnimatedPlaceholder()}
                            <Image
                                onLoadEnd={() => this.setState({ loading: false })}
                                onError={() => this.setState({ error: true, loading: false })}
                                style={imageStyle}
                                source={{ uri: banner }}
                            />
                        </View>
                    </TouchableWithoutFeedback>
                </View>
                <View  style={contentContainerStyle}>
                    <View style={actionsContainerStyle}>
                        <View style={actionContainerStyle}>
                            <TouchableOpacity onPress={onBookmarkPress}>
                                <MaterialCommunityIcons
                                    style={iconStyle}
                                    name="bookmark-outline"
                                    size={28} color="#212121"
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={actionContainerStyle}>
                            <TouchableOpacity onPress={onSharePress}>
                                <MaterialCommunityIcons
                                    style={iconStyle}
                                    name="share-variant"
                                    size={28}
                                    color="#212121"
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <Text style={metaTextStyle}>
                        {`${date}, ${locationName}`}
                    </Text>
                    <Text style={nameTextStyle}>
                        {name}
                    </Text>
                    <Text style={priceTextStyle}>{price}</Text>
                </View>
            </View>
        );
    }
}

const styles = {
    parentContainerStyle: {
        padding: 10
    },
    imageStyle: {
        width: '100%',
        height: 200,
        borderRadius: 4
    },
    contentContainerStyle: {
        marginHorizontal: 13
    },
    actionsContainerStyle: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    actionContainerStyle: {
        flexDirection: 'row'
    },
    iconStyle: {
        marginRight: 15
    },
    metaTextStyle: {
        fontFamily: 'nregular',
        color: '#8F8E94',
        fontSize: 12
    },
    nameTextStyle: {
        fontFamily: 'nextrabold',
        color: '#424242',
        fontSize: 16
    },
    priceTextStyle: {
        fontFamily: 'nregular',
        color: '#0076FF',
        fontSize: 12
    },
    placeholderContainerStyle: {
        width: '100%',
        height: 200,
        borderRadius: 4,
        backgroundColor: '#E0E0E0',
        position: 'absolute',
        zIndex: 1,
    },
    errorTextStyle: {
        fontFamily: 'nregular',
        color: '#424242',
        padding: 15
    }
}

export { EventCard };
