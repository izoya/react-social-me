import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App.js';
import {ThemeProvider, createTheme} from '@material-ui/core';
import './styles/app.sass';

const theme = createTheme({
    bb: {
        border: '1px solid red',
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App/>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
