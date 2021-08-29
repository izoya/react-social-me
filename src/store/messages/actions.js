import {ADD_MESSAGE, GET_MESSAGES} from './types';

export const addMessage = (message, channelAlias) => ({
    type: ADD_MESSAGE,
    payload: {
        message,
        channelAlias,
    },
});

export const getMessagesSuccess = (messages) => ({
    type: GET_MESSAGES,
    payload: messages,
});
