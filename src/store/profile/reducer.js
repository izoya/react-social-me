import {TOGGLE, SAVE_USER} from './types';

const initialState = {
    isEnabled: true,
    user: {
        displayName: 'User',
    },
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE:
            return {
                ...state,
                isEnabled: !state.isEnabled,
            };
        case SAVE_USER:
            return {
                ...state,
                user: action.payload,
            };
        default: return state;
    }
};
