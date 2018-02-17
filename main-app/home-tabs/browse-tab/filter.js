import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';
import { Header, ListEntry } from './components';
import { ListItem } from 'native-base';

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

class FilterScreen extends Component {

    _renderCenterComponent = () => {
        const {
            selectorContainer,
            selectorTextStyle
        } = styles;

        return (
            <View style={selectorContainer}>
                <Text style={selectorTextStyle}>Filter by interest</Text>
            </View>
        );
    }

    _handleItemSelect = (id) => {
        const { navigation } = this.props;
        console.log(id);
        navigation.goBack();
    }

    _renderItem = ({ index, item }) => {
        const { name, id } = item;
        return (
            <ListEntry
                name={name}
                id={id}
                onItemSelect={this._handleItemSelect}
            />
        );
    }

    render() {
        const { itemTitleStyle, listContainerStyle } = styles;
        return (
            <View style={{ flex: 1 }}>
                <Header
                    centerComponent={this._renderCenterComponent}
                    backNavigation={this.props.navigation}
                />
                <View style={listContainerStyle}>
                    <ListItem itemDivider>
                        <Text style={itemTitleStyle}>Interests</Text>
                    </ListItem>
                    <FlatList
                        data={INTERESTS_DATA}
                        extraData={this.state}
                        keyExtractor={(item, index) => index}
                        renderItem={this._renderItem}
                    />
                </View>
            </View>
        );
    }
}

const styles = {
    selectorContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    selectorTextStyle: {
        fontFamily: 'nregular',
        color: '#212121',
        fontSize: 16
    },
    itemTitleStyle: {
        fontFamily: 'nsemibold',
        color: '#424242',
        fontSize: 16
    },
    listContainerStyle: {
        flex: 1
    }
}
export default FilterScreen;
