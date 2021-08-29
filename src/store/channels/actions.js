import {GET_CHANNELS} from '~/store/channels/types';

export const getChannelsSuccess = (channels) => ({
    type: GET_CHANNELS,
    payload: channels,
});
