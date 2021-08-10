import React, {useCallback, useState, useEffect} from 'react';
import {Messages} from './components/Messages/Messages';
import {Header} from './components/Header';

export const App = () => {
    const [messages, setMessages] = useState([]);
    const robotMessage = {
        author: 'Robot',
        text: 'You\'re welcome!',
    };

    const handleAddMessage = useCallback(
        (message) => setMessages(state => [...state, message]),
        []
    );
    useEffect(() => {
        const lastMessage = messages[messages.length - 1];

        if (!lastMessage || lastMessage.author === robotMessage.author) return;

        setTimeout(() => handleAddMessage(robotMessage), 1500);
    }, [messages]);

    return (
        <>
            <Header/>
            <main className="container pt-5 mt-5">
                <Messages messages={messages} addMessage={handleAddMessage}/>
            </main>
        </>
    );
};
