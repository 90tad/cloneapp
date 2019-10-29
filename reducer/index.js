import { combineReducers } from 'redux';

import getData from './getData'

const mReducer = combineReducers({
    getData,
})

export default mReducer