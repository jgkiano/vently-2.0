import React, { Component } from 'react';
import {
    ListItem,
    Body,
    Right,
    Icon
} from 'native-base';
import { Text } from 'react-native';

class ListEntry extends Component {
    render() {
        const { iconStyle } = styles;
        const { id, name, onItemSelect, selected } = this.props;
        return (
            <ListItem onPress={() => onItemSelect(id)} icon>
                <Body>
                    <Text>{name}</Text>
                </Body>
                { selected ?
                    <Right>
                        <Icon name="ios-checkmark" size={22} style={iconStyle} />
                    </Right>
                    :
                    null
                }
            </ListItem>
        );
    }
}

const styles = {
    iconStyle: {
        color: '#0076FF',
        fontSize: 26
    }
}

export { ListEntry };
