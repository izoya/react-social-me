import {firebaseDB} from '~/api/firebase/firebase';
import {addMessage, getMessagesSuccess} from './actions';
import {nanoid} from 'nanoid';

export const getMessagesFB = () => (dispatch) => {
    firebaseDB.ref('messages').get().then(snapshot => {
        const messages = {};
        snapshot.forEach(snap => {
            messages[snap.key] = Object.values(snap.val());
        });
        dispatch(getMessagesSuccess(messages));
    });
};

export const addMessageFB = (message, channelAlias) => (dispatch) => {
    message = {...message, id: nanoid()};
    firebaseDB.ref('messages').child(channelAlias).push(message);
    dispatch(addMessage(message, channelAlias));
};
