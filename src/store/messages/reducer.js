import {ADD_MESSAGE} from './types';
import {nanoid} from 'nanoid';

const initialState = {
    messages: {
        general: [],
        friends: [],
        family: [],
    },
};

export const messagesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: {
                    ...state.messages,
                    [payload.channelAlias]: [
                        ...(state.messages[payload.channelAlias] || []),
                        {...payload.message, id: nanoid()},
                    ],
                },
            };
        default:
            return state;
    }
};
