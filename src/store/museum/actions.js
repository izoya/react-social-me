import {
    GET_DEPARTMENTS_START,
    GET_DEPARTMENTS_SUCCESS,
    GET_DEPARTMENTS_ERROR,
    SEARCH_IN_DEPARTMENT_START,
    SEARCH_IN_DEPARTMENT_SUCCESS,
    SEARCH_IN_DEPARTMENT_ERROR,
} from './types';

export const getDepartmentsSuccess = (departments) => ({
    type: GET_DEPARTMENTS_SUCCESS,
    payload: departments,
});

export const getDepartmentsStart = () => ({type: GET_DEPARTMENTS_START});

export const getDepartmentsError = (error) => ({
    type: GET_DEPARTMENTS_ERROR,
    payload: error,
});

export const searchInDepartmentSuccess = (objects) => ({
    type: SEARCH_IN_DEPARTMENT_SUCCESS,
    payload: objects,
});

export const searchInDepartmentStart = () => ({type: SEARCH_IN_DEPARTMENT_START});

export const searchInDepartmentError = (error) => ({
    type: SEARCH_IN_DEPARTMENT_ERROR,
    payload: error,
});
