import {firebaseDB} from '~/api/firebase/firebase';
import {getChannelsSuccess} from './actions';

export const getChannelsFB = () => (dispatch) => {
    firebaseDB.ref('channels').get().then(snapshot => {
        console.log('snapshot', snapshot);
        const channels = [];
        snapshot.forEach(snap => {
            channels.push(snap.val());
        });
        dispatch(getChannelsSuccess(channels));
    });
}