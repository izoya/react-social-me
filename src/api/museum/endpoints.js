import {request} from '../request';

export const getDepartmentsApi = () => request.get('/departments');
export const searchApi = (searchString) => request.get('/search', {q: searchString});
export const searchInDepartmentApi = (departmentId, searchString) => request.get('/search', {departmentId, q: searchString});
