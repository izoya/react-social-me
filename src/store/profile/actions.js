import {TOGGLE, SAVE_USER} from './types';

export const toggleCheckbox = () => ({
    type: TOGGLE,
});

export const saveUser = (user) => ({
    type: SAVE_USER,
    payload: user,
});
