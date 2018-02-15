import React, { Component } from 'react';
import { View, Text, Image, Dimensions, TouchableOpacity } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Button } from './';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

class Slider extends Component {

    state = {
        entries: [],
        activeSlide: 0
    }

    componentWillMount() {
        this.setState({ entries: this.props.slides });
    }

    _renderItem = ({item, index}) => {

        const {
            slideContainerStyle,
            imageStyle,
            textTitleStyle,
            contentTextStyle
        } = styles;

        if( index === this.state.entries.length - 1 ) {
            return (
                <View style={slideContainerStyle}>
                    <Image source={item.image} style={{ ...item.imageStyle, ...imageStyle }} resizeMode="contain" />
                    <Text style={textTitleStyle}>{item.title}</Text>
                    <Text style={contentTextStyle}>{item.content}</Text>
                    <View>
                        <Button text={this.props.callToActionText} onPress={this.props.onCallToActionPress} />
                    </View>
                </View>
            );
        }

        return (
            <View style={slideContainerStyle}>
                <Image source={item.image} style={{ ...item.imageStyle, marginBottom: 40 }} resizeMode="contain" />
                <Text style={textTitleStyle}>{item.title}</Text>
                <Text style={contentTextStyle}>{item.content}</Text>
            </View>
        );

    }

    _renderPagination = () => {
        const { entries, activeSlide } = this.state;
        const { dotStyle, dotsContainerStyle } = styles;
        return (
            <View style={dotsContainerStyle}>
                <Pagination
                    dotsLength={entries.length}
                    activeDotIndex={activeSlide}
                    dotColor="#0076FF"
                    inactiveDotColor="#C7C7CD"
                    dotStyle={dotStyle}
                />
            </View>
        );
    }

    render() {
        const { parentStyle } = styles;
        return (
            <View style={parentStyle}>
                <Carousel
                    ref={(c) => { this._carousel = c; }}
                    data={this.state.entries}
                    renderItem={this._renderItem}
                    sliderWidth={SCREEN_WIDTH}
                    itemWidth={SCREEN_WIDTH}
                    itemHeight={SCREEN_HEIGHT}
                    sliderHeight={SCREEN_HEIGHT}
                    onSnapToItem={ index => this.setState({ activeSlide: index }) }
                />
                {this._renderPagination()}
            </View>
        );
    }
}

const styles = {
    parentStyle: {
        flex: 1
    },
    dotStyle: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#0076FF'
    },
    dotsContainerStyle: {
        paddingBottom: 30
    },
    slideContainerStyle: {
        flex: 1,
        width: SCREEN_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 40
    },
    imageStyle: {
        marginBottom: 40
    },
    textTitleStyle: {
        fontFamily: 'nbold',
        fontSize: 22,
        color: '#424242',
        marginBottom: 20
    },
    contentTextStyle: {
        fontFamily: 'nregular',
        color: '#8F8E94',
        textAlign: 'center',
        fontSize: 16,
        marginBottom: 20
    }
}
export { Slider };
