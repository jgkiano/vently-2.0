import { combineReducers } from 'redux';

import init from '../main-app/init/reducers';
import onboarding from '../main-app/onboarding/reducers';

const reducers = combineReducers({
    init,
    onboarding
});

export default reducers;
