import * as types from './type'

const url = 'http://10.0.3.2:3000/posts'

export function fetchData() {
    return dispatch => {
        dispatch(startFetch())
        fetch(url)
            .then(response => response.json())
            .then((data) => {
                dispatch(fetchSuccess(data))
            })
            .catch(error => dispatch(fetchError(error)))
    }
}

export function startFetch() {
    return {
        type: types.START_FETCH
    }
}

export function fetchSuccess(data) {
    return {
        type: types.FETCH_SUCCESS,
        data
    }
}

export function fetchError() {
    return {
        type: types.FETCH_ERROR,
        error
    }
}


