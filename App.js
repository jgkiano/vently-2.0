import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Font, AppLoading, Asset } from 'expo';
import { Root } from "native-base";
import { Provider } from 'react-redux';
import MainNavigator from './router';
import store from './store';

class Vently extends Component {

    state = {
        isReady: false,
        networkStatus: null
    }

    componentWillMount () {
        this._cacheResourcesAsync();
    }

    _cacheResourcesAsync = async () => {
        await this._loadImages();
        await this._loadFonts();
        this.setState({ isReady: true });
    }

    _loadImages = async () => {
        // const images = [
        //     require('./main-app/onboarding/assets/vently-logo.png'),
        // ];
        // for (let image of images) {
        //     await Asset.fromModule(image).downloadAsync();
        // }
        return true;
    }

    _loadFonts = async () => {
        await Font.loadAsync({
            nbalck: require('./assets/fonts/NunitoSans-Black.ttf'),
            nbold: require('./assets/fonts/NunitoSans-Bold.ttf'),
            nextrabold: require('./assets/fonts/NunitoSans-ExtraBold.ttf'),
            nextralight: require('./assets/fonts/NunitoSans-ExtraLight.ttf'),
            nlight: require('./assets/fonts/NunitoSans-Light.ttf'),
            nregular: require('./assets/fonts/NunitoSans-Regular.ttf'),
            nsemibold: require('./assets/fonts/NunitoSans-SemiBold.ttf'),
            'Roboto': require('native-base/Fonts/Roboto.ttf'),
            'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
        });
        return true;
    }

    _catchError = (error) => {
        console.log(error);
    }

    render() {
        if (!this.state.isReady) {
            return <AppLoading onError={this._catchError} />;
        }
        return (
            <Provider store={store}>
                <Root>
                    <MainNavigator />
                </Root>
            </Provider>
        );
    }
}

export default Vently;
