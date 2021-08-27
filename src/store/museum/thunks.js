import {searchInDepartmentApi} from '../../api/museum/endpoints';
import {
    getDepartmentsStart,
    getDepartmentsSuccess,
    getDepartmentsError,
    searchInDepartmentStart,
    searchInDepartmentSuccess,
    searchInDepartmentError,
} from './actions';

export const getDepartments = () => {
    return (dispatch, _, endpoints) => {
        dispatch(getDepartmentsStart());
        endpoints.getDepartmentsApi()
            .then(({data}) => dispatch(getDepartmentsSuccess(data)))
            .catch(e => dispatch(getDepartmentsError(e)));
    };
};

export const searchInDepartment = (departmentId, searchString) => {
    return (dispatch, _, endpoints) => {
        dispatch(searchInDepartmentStart());
        endpoints.searchInDepartmentApi(departmentId, searchString)
            .then(({data}) => dispatch(searchInDepartmentSuccess(data)))
            .catch(e => dispatch(searchInDepartmentError(e)));
    };
};
