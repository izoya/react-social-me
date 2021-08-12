import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App.js';
import {ThemeProvider, createTheme} from '@material-ui/core';
import './styles/app.sass';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const theme = createTheme({
    bb: {
        border: '1px solid red',
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <Switch>
                    <Route path="*" component={App}/>
                </Switch>
            </BrowserRouter>
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
