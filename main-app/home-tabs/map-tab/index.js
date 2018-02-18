import React, { Component } from 'react';
import { View, Text, Platform, Dimensions } from 'react-native';
import { connect } from 'react-redux';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import { Toast } from 'native-base';
import { MapView, Permissions, Location, Constants } from 'expo';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { BottomNavigation, MapCard, Header } from './components';

import MapStyle from './assets/map-style';

const SCREEN_WIDTH = Dimensions.get('window').width;

const NAIROBI_REGION = {
    latitude: -1.2916026412978368,
    longitude: 36.82259799912572,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
}

const DEFAULT_ZOOM = {
    latitudeDelta: 0.025699529086379735,
    longitudeDelta: 0.016093255565579057
}

const EVENTS_DATA = [
    {
        date: 'Tomorrow',
        locationName: 'Ngong Racecourse',
        name: 'Jameson Connects Live: TY DOLLA $ign',
        price: 'KES 500 - KES 3000',
        banner: 'https://i2.wp.com/www.mwendengao.com/wp-content/uploads/2017/11/Ty-Dolla-Sign-Jameson-Connects-Kenya.jpg?resize=1080%2C1080',
        latitude: -1.3110553,
        longitude: 36.7433962
    },
    {
        date: '23rd Feb',
        locationName: 'Training Grounds',
        name: 'Safaricom International Jazz Festival',
        price: 'KES 500 - KES 2000',
        banner: 'https://scontent.fnbo2-1.fna.fbcdn.net/v/t1.0-9/27752258_10159969802625084_4734251870543737453_n.jpg?oh=a5b13a9ef02e4ff32030622813c728a5&oe=5B2293AD',
        latitude: -1.308579,
        longitude: 36.8162717
    },
];

class MapTab extends Component {

    state = {
        location: null,
        mapCenter: null,
        showEvents: false
    };

    componentWillMount() {
        if (Platform.OS === 'android' && !Constants.isDevice) {
            console.log('Go get a real phone! broke ass');
        } else {
            this._getLocationAsync();
        }
    }

    _getLocationAsync = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            this.setState({ location: NAIROBI_REGION });
            return Toast.show({
                text: 'Location permission denied. Please enable it in settings',
                position: 'bottom',
                buttonText: 'Okay'
            });
        }
        const { locationServicesEnabled } = await Location.getProviderStatusAsync();
        if(!locationServicesEnabled) {
            this.setState({ location: NAIROBI_REGION });
            return Toast.show({
                text: 'You have location services turned off. Please enable it in settings',
                position: 'bottom',
                buttonText: 'Okay'
            });
        }
        const location = await Location.getCurrentPositionAsync({ enableHighAccuracy: true });
        const firstEvent = EVENTS_DATA[0];
        const mapCenter = {
            ...DEFAULT_ZOOM,
            longitude: firstEvent.longitude,
            latitude: firstEvent.latitude
        }
        this.setState({
            location: { ...location.coords, ...DEFAULT_ZOOM },
            mapCenter
        });
    };

    _renderMap = () => {
        const { parentStyle } = styles;
        const { mapCenter } = this.state;
        if(mapCenter) {
            return (
                <MapView
                    style={parentStyle}
                    initialRegion={mapCenter}
                    showsUserLocation={true}
                    userLocationAnnotationTitle='There you are 😃'
                    customMapStyle={MapStyle}
                    ref={component => this._map = component}
                >
                    <MapView.Marker
                        coordinate={{
                            latitude: mapCenter.latitude,
                            longitude: mapCenter.longitude
                        }}
                        image={this.props.assets.marker}
                    />
                </MapView>
            );
        }
        return null;
    }

    _renderItem = ({ item }) => {
        const { banner, date, locationName, price, name } = item;
        return (
            <MapCard
                name={name}
                banner={banner}
                date={date}
                locationName={locationName}
                price={price}
            />
        );
    }

    _handleScroll = (index) => {
        const event = EVENTS_DATA[index];
        const mapCenter = {
            ...DEFAULT_ZOOM,
            longitude: event.longitude,
            latitude: event.latitude
        }
        if(this._map) {
            this._map.animateToCoordinate({
                latitude: mapCenter.latitude,
                longitude: mapCenter.longitude,
            });
            this.setState({
                mapCenter
            });
        }
    }

     render() {
        const { navigation } = this.props;
        const {
            parentStyle,
            carouselContainerStyle,
            iconStyle
        } = styles;
        return (
            <View style={parentStyle}>
                <View style={parentStyle}>
                    {this._renderMap()}
                    <View style={carouselContainerStyle}>
                        <Carousel
                            ref={(c) => { this._carousel = c; }}
                            data={EVENTS_DATA}
                            renderItem={this._renderItem}
                            sliderWidth={SCREEN_WIDTH}
                            itemWidth={SCREEN_WIDTH}
                            onSnapToItem={ index => this._handleScroll(index) }
                        />
                    </View>
                </View>
                <BottomNavigation navigation={navigation} active='map' />
            </View>
        );
    }
}

const styles = {
    parentStyle: {
        flex: 1
    },
    carouselContainerStyle: {
        position: 'absolute',
        zIndex: 5,
        bottom: 15
    },
    iconStyle: {
        marginLeft: 15
    }
}

export default connect( ({ init }) => ({ assets: init.assets }) , null)(MapTab);
