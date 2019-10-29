import * as types from '../action/type'

const mState = {
    isFetching: true,
    data: [],
    error: null,
}

const getData = function (state = mState, action) {

    switch (action.type) {
        case types.START_FETCH: {
            return {
                ...state,
                isFetching: true
            }
        }
        case types.FETCH_SUCCESS: {
            return {
                ...state,
                isFetching: false,
                data: action.data
            }
        }
        case types.FETCH_ERROR: {
            return {
                ...state,
                error: action.error,
                isFetching: false
            }
        }
        default: {
            return state;
        }
    }
};

export default getData;