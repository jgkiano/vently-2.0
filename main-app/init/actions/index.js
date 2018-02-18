import assets from './assets';
import {
    INIT_ASSETS_FOUND
} from '../types';

export const startApp = (navigation) => (dispatch) => {
    dispatch({ type: INIT_ASSETS_FOUND, payload: assets });
    navigation.navigate('home');
}
