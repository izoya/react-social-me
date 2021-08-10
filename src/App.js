import React from 'react';
import {Board} from './components/Board/Board';
import {Header} from './components/Header';

export const App = () => {
    return (
        <>
            <Header/>
            <main className="container pt-5 mt-5">
                <Board/>
            </main>
        </>
    );
};
