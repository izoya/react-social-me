import {TOGGLE} from './types';

const initialState = {
    isEnabled: true,
    user: {
        name: 'User',
    },
};

export const profileReducer = (state = initialState, action) => {
    switch (action.type) {
    case TOGGLE:
        return {
            ...state,
            isEnabled: !state.isEnabled,
        };
    default: return state;
    }
};
