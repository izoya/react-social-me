import {ADD_MESSAGE} from './types';

export const addMessage = (message, channelAlias) => ({
    type: ADD_MESSAGE,
    payload: {
        message,
        channelAlias,
    },
});
