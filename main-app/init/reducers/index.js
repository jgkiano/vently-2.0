import {
    INIT_ASSETS_FOUND
} from '../types';

const INITIAL_STATE = {
    assets: null
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case INIT_ASSETS_FOUND:
            return { ...state, assets: action.payload };
        default:
            return state;
    }
}
