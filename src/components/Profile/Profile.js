import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {toggleCheckbox} from '~/store/profile';

export const Profile = () => {
    const {isEnabled, user} = useSelector(state => state.profile);
    const dispatch = useDispatch();

    return (
        <>
            <h1>Profile</h1>
            <h3>Hi, {user.displayName}</h3>
            <p>{user.email}</p>
            <input
                type="checkbox"
                checked={isEnabled}
                onChange={() => dispatch(toggleCheckbox())}/>
        </>

    );
};
