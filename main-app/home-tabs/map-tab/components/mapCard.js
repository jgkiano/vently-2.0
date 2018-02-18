import React, { Component } from 'react';
import { View, Text, Image, Dimensions } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class MapCard extends Component {
    render() {
        const {
            parentStyle,
            cardContainer,
            imageStyle,
            contentContainer,
            textMetaStyle,
            textTitleStyle,
            textPriceStyle
        } = styles;
        const {
            name,
            banner,
            date,
            locationName,
            price
        } = this.props;
        return (
            <View style={parentStyle}>
                <View style={cardContainer}>
                    <Image
                        style={imageStyle}
                        source={{ uri: banner }}
                    />
                    <View style={contentContainer}>
                        <Text style={textMetaStyle}>
                            {`${date}, ${locationName}`}
                        </Text>
                        <Text style={textTitleStyle}>
                            {name}
                        </Text>
                        <Text style={textPriceStyle}>
                            {price}
                        </Text>
                    </View>
                </View>
            </View>
        );
    }
}

const styles= {
    parentStyle: {
        width: SCREEN_WIDTH,
        borderRadius: 8,

    },
    cardContainer: {
        marginHorizontal: 50,
        backgroundColor: 'white',
        borderRadius: 8,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#E0E0E0'
    },
    imageStyle: {
        width: '100%',
        height: 130
    },
    contentContainer: {
        padding: 10,
        paddingHorizontal: 15,
        borderTopWidth: 1,
        borderColor: '#E0E0E0'
    },
    textMetaStyle: {
        fontFamily: 'nregular',
        color: '#8F8E94',
        fontSize: 12
    },
    textTitleStyle: {
        fontFamily: 'nextrabold',
        color: '#424242',
        fontSize: 16,
        marginVertical: 5
    },
    textPriceStyle: {
        fontFamily: 'nregular',
        color: '#0076FF',
        fontSize: 12
    }
}

export { MapCard };
