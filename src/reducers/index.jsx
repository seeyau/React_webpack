/**
 * Created by liliwen on 2017/1/26.
 */
'use strict';
import {combineReducers} from 'redux';
import loginReducer from './login';
import mReducer from './m';


export default combineReducers({
    loginReducer,
    mReducer
});