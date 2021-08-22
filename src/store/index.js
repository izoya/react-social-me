import {createStore, combineReducers, compose, applyMiddleware} from 'redux';
import {botSendMessage} from './middleware';
import {messagesReducer} from './messages';
import {profileReducer} from './profile';
import {channelsReducer} from './channels';
import thunk from 'redux-thunk';
import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
};
const _persistReducer = persistReducer(
    persistConfig,
    combineReducers({
        profile: profileReducer,
        channels: channelsReducer,
        messages: messagesReducer,
    })
);

export const store = createStore(
    _persistReducer,
    compose(
        applyMiddleware(thunk, botSendMessage),
        window.__REDUX_DEVTOOLS_EXTENSION__
            ? window.__REDUX_DEVTOOLS_EXTENSION__()
            : args => args
    )
);

export const persistor = persistStore(store);
