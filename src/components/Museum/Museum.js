import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDepartments} from '~/store/museum';

export const Museum = () => {
    const {loading, departments, error} = useSelector(state => state.museum);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!departments.length) {
            dispatch(getDepartments());
        }
    }, [dispatch, departments]);

    return (
        <div>
            <h1>The Metropolitan Museum of Art</h1>
            <h2>Departments:</h2>
            {error && <h3>Error occurred.</h3>}
            {departments.length &&
                <ul>{departments.map(department => (
                    <li key={department.departmentId}>{department.displayName}</li>
                ))}
                </ul>
            }
            {loading && <h3>Loading...</h3>}

        </div>
    );
};
