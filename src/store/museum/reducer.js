import {
    GET_DEPARTMENTS_START,
    GET_DEPARTMENTS_SUCCESS,
    GET_DEPARTMENTS_ERROR,
    SEARCH_IN_DEPARTMENT_START,
    SEARCH_IN_DEPARTMENT_SUCCESS,
    SEARCH_IN_DEPARTMENT_ERROR,
} from './types';

const initialState = {
    departments: [],
    objects: [],
    loading: false,
    error: null,
};

export const museumReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DEPARTMENTS_START:
        case SEARCH_IN_DEPARTMENT_START:
            return {
                ...state,
                loading: true,
            };
        case GET_DEPARTMENTS_SUCCESS:
            return {
                ...state,
                loading: false,
                departments: action.payload.departments,
            };
        case SEARCH_IN_DEPARTMENT_SUCCESS:
            return {
                ...state,
                loading: false,
                objects: action.payload.objectIDs,
            };
        case GET_DEPARTMENTS_ERROR:
        case SEARCH_IN_DEPARTMENT_ERROR:
            return {
                ...state,
                error: action.payload,
                loading: false,
            };
        default:
            return state;
    }
};
