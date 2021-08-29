import React from 'react';
import ReactDOM from 'react-dom';
import {App} from './App.js';
import {ThemeProvider, createTheme} from '@material-ui/core';
import './styles/app.sass';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './store';

const theme = createTheme({
    bb: {
        border: '1px solid red',
    },
});

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store}>
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Switch>
                        <Route path="*" component={App}/>
                    </Switch>
                </BrowserRouter>
            </ThemeProvider>
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
