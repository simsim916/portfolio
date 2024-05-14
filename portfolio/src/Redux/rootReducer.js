import { combineReducers } from 'redux';
import { menuReducer } from './menu/menu_reducer';

const rootReducer = combineReducers({
    basic: menuReducer
});

export default rootReducer;