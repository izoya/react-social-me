import {GET_CHANNELS} from './types';

const initialState = {
    channels: [
        // {id: 1, name: 'General', alias: 'general'},
        // {id: 2, name: 'Friends', alias: 'friends'},
        // {id: 3, name: 'Family', alias: 'family'},
    ],
};

export const channelsReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHANNELS:
            return {
                ...state,
                channels: action.payload,
            };
        default:
            return state;
    }
};
