import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import _ from 'lodash';
import { FullButton, KeyBoardSpacer } from './components';

const INTERESTS_DATA = [
    {
        id: 0,
        name: 'ART'
    },
    {
        id: 1,
        name: 'AUTO'
    },
    {
        id: 2,
        name: 'BOAT & AIR'
    },
    {
        id: 3,
        name: 'BUSINESS'
    },
    {
        id: 20,
        name: 'CHARITY'
    },
    {
        id: 4,
        name: 'COMMUNITY'
    },
    {
        id: 5,
        name: 'FAMILY'
    },
    {
        id: 6,
        name: 'FASHION'
    },
    {
        id: 7,
        name: 'FILM & MEDIA'
    },
    {
        id: 8,
        name: 'FOOD & DRINK'
    },
    {
        id: 9,
        name: 'GONVERNEMT'
    },
    {
        id: 10,
        name: 'HEALTH'
    },
    {
        id: 11,
        name: 'HOBBIES'
    },
    {
        id: 12,
        name: 'HOLIDAY'
    },
    {
        id: 13,
        name: 'LIFESTYLE'
    },
    {
        id: 14,
        name: 'MUSIC'
    },
    {
        id: 15,
        name: 'SCIENCE'
    },
    {
        id: 16,
        name: 'SPIRITUALITY'
    },
    {
        id: 17,
        name: 'SPORTS'
    },
    {
        id: 18,
        name: 'TECHNOLOGY'
    },
    {
        id: 19,
        name: 'TRAVEL'
    },
];

class InterestsSelectionScreen extends Component {

    state = {
        selected: []
    }

    handleSelect = (id) => {
        let { selected } = this.state;
        if(_.includes(selected, id)) {
            selected = _.remove(selected, selectedId => selectedId !== id);
            return this.setState({ selected });
        }
        selected.push(id);
        return this.setState({ selected });
    }

    renderInterests = () => {
        const { selected } = this.state;
        const {
            inactiveStyle,
            activeStyle,
            interestTextContainerStyle
        } = styles;
        return INTERESTS_DATA.map(({ id, name }) => {
            return (
                <View key={id} style={interestTextContainerStyle}>
                    <TouchableOpacity onPress={() => this.handleSelect(id)}>
                        <Text style={_.includes(selected, id) ? activeStyle : inactiveStyle}>{name}</Text>
                    </TouchableOpacity>
                </View>
            )
        });
    }

    render() {
        const {
            parentStyle,
            contentContainerStyle,
            headerContainerStyle,
            titleTextStyle,
            descTextStyle,
            interetsContainer,
            infoTextStyle
        } = styles;
        const {
            navigation
        } = this.props;
        return (
            <View style={parentStyle}>
                <View style={contentContainerStyle}>
                    <View style={headerContainerStyle}>
                        <Text style={titleTextStyle}>
                            Choose your interests
                        </Text>
                        <Text style={descTextStyle}>
                            Put the things that matter most to you up front and center. We’ll show you events to match.
                        </Text>
                    </View>
                    <View style={interetsContainer}>
                        {this.renderInterests()}
                    </View>
                    <View>
                        <Text style={infoTextStyle}>
                            You can always change this later
                        </Text>
                    </View>
                </View>
                <FullButton onPress={() => navigation.navigate('home')} text="CONTINUE" />
                <KeyBoardSpacer />
            </View>
        );
    }
}

const styles = {
    parentStyle: {
        flex: 1
    },
    contentContainerStyle: {
        flex: 1,
        padding: 20,
        paddingTop: 40,
        alignItems: 'center'
    },
    headerContainerStyle: {
        marginBottom: 15
    },
    titleTextStyle: {
        fontFamily: 'nbold',
        fontSize: 22,
        color: '#424242',
        marginTop: 10,
        textAlign: 'center'
    },
    descTextStyle: {
        fontFamily: 'nregular',
        textAlign: 'center',
        color: '#8F8E94',
        marginTop: 15,
        fontSize: 16
    },
    interetsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    infoTextStyle: {
        fontFamily: 'nregular',
        textAlign: 'center',
        color: '#8F8E94',
        marginTop: 15,
        fontSize: 14
    },
    inactiveStyle: {
        fontFamily: 'nsemibold',
        fontSize: 14,
        color: '#0076FF',
        borderWidth: 1,
        borderColor: '#0076FF',
        padding: 5,
        paddingHorizontal: 10
    },
    activeStyle: {
        fontFamily: 'nsemibold',
        fontSize: 14,
        color: 'white',
        backgroundColor: '#0076FF',
        borderWidth: 1,
        borderColor: '#0076FF',
        padding: 5,
        paddingHorizontal: 10
    },
    interestTextContainerStyle: {
        flexDirection: 'row',
        marginHorizontal: 5,
        marginVertical: 5
    }
}
export default InterestsSelectionScreen;
