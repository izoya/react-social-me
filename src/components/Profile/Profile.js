import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleCheckbox} from '../../store/profile';

export const Profile = () => {
    const {isEnabled, user} = useSelector(state => state.profile);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Profile</h1>
            <h3>Hi, {user.name}</h3>
            <input
                type="checkbox"
                checked={isEnabled}
                onChange={() => dispatch(toggleCheckbox())}/>
        </>

    );
};
