import {combineReducers} from 'redux';
import products from './products';
import basket from './basket';
import message from './message';

const appReducers = combineReducers({
    products,
    basket,
    message
});

export default appReducers;

