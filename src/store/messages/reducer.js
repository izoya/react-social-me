import {ADD_MESSAGE, GET_MESSAGES} from './types';
import {nanoid} from 'nanoid';

const initialState = {
    messages: {},
};

export const messagesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case GET_MESSAGES:
            return {
                ...state,
                messages: payload,
            };
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
