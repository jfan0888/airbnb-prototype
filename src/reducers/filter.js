import {
    SET_FILTER_REQUEST,
    SET_FILTER_SUCCESS,
    SET_FILTER_ERROR,
} from '../constants/actionTypes';

const initialState = {
    isLoading: false,
    error: null,
    data: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_FILTER_REQUEST:
            return {
                ...state,
                isLoading: true,
                error: null,
            };

        case SET_FILTER_SUCCESS:
            return {
                ...state,
                isLoading: false,
                data: true,
            }

        case SET_FILTER_ERROR:
            return {
                ...state,
                isLoading: false,
                data,
            };

        default:
            return state;
    }
};
