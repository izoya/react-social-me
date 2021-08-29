import {addMessageFB, ADD_MESSAGE} from '../messages';

const botAnswer = {
    author: 'Robot',
    text: 'You\'re welcome!',
};

export const botSendMessage = store => next => action => {
    const {type, payload} = action;
    if (type === ADD_MESSAGE && payload.message.author !== botAnswer.author) {
        setTimeout(() => {
            store.dispatch(addMessageFB(
                botAnswer,
                payload.channelAlias
            ));
        }, 1500);
    }

    return next(action);
};
