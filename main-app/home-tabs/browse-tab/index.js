import React, { Component } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { BottomNavigation, Header } from './components';
import { Entypo, Feather, MaterialCommunityIcons } from '@expo/vector-icons';
import { Icon } from 'native-base';

class BrowseTab extends Component {

    _renderCenterComponent = () => {
        return (
            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                <Text style={{ fontFamily: 'nregular', color: '#212121', fontSize: 16 }}>Selected for you</Text>
                <View style={{ position: 'relative', top: 2}}>
                    <Entypo name="chevron-small-down" size={24} color="#212121" />
                </View>
            </TouchableOpacity>
        );
    }

    _renderRightComponent = () => {
        return (
            <TouchableOpacity>
                <Feather name="filter" size={24} color="#212121" />
            </TouchableOpacity>
        )
    }

    render() {
        const { navigation } = this.props;
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <Header
                        centerComponent={this._renderCenterComponent}
                        rightComponent={this._renderRightComponent}
                    />
                    <View style={{ marginHorizontal: 10, marginTop: 10 }}>
                        <View>
                            <View style={{ padding: 10 }}>
                                <Image style={{ width: '100%', height: 200, borderRadius: 4 }} source={{ uri: 'https://i2.wp.com/www.mwendengao.com/wp-content/uploads/2017/11/Ty-Dolla-Sign-Jameson-Connects-Kenya.jpg?resize=1080%2C1080' }} />
                            </View>
                            <View  style={{ marginHorizontal: 13 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialCommunityIcons style={{ marginRight: 15 }} name="bookmark-outline" size={28} color="#212121" />
                                    <MaterialCommunityIcons name="share-variant" size={28} color="#212121" />
                                </View>

                                <Text style={{ fontFamily: 'nregular', color: '#8F8E94', fontSize: 12 }}>Tomorrow, Ngong Racecourse</Text>
                                <Text style={{ fontFamily: 'nextrabold', color: '#424242', fontSize: 16 }}>
                                    Jameson Connects Live: TY DOLLA $ign
                                </Text>
                                <Text style={{ fontFamily: 'nregular', color: '#0076FF', fontSize: 12 }}>KES 1500 - KES 3000</Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: 5 }} />
                        <View>
                            <View style={{ padding: 10 }}>
                                <Image style={{ width: '100%', height: 200, borderRadius: 4 }} source={{ uri: 'https://i2.wp.com/www.mwendengao.com/wp-content/uploads/2017/11/Ty-Dolla-Sign-Jameson-Connects-Kenya.jpg?resize=1080%2C1080' }} />
                            </View>
                            <View  style={{ marginHorizontal: 13 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <MaterialCommunityIcons style={{ marginRight: 15 }} name="bookmark-outline" size={28} color="#212121" />
                                    <MaterialCommunityIcons name="share-variant" size={28} color="#212121" />
                                </View>

                                <Text style={{ fontFamily: 'nregular', color: '#8F8E94', fontSize: 12 }}>Tomorrow, Ngong Racecourse</Text>
                                <Text style={{ fontFamily: 'nextrabold', color: '#424242', fontSize: 16 }}>
                                    Jameson Connects Live: TY DOLLA $ign
                                </Text>
                                <Text style={{ fontFamily: 'nregular', color: '#0076FF', fontSize: 12 }}>KES 1500 - KES 3000</Text>
                            </View>
                        </View>
                    </View>
                </View>
                <BottomNavigation navigation={navigation} active='browse' />
            </View>
        );
    }
}

export default BrowseTab;
