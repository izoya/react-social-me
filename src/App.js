import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {saveUser} from '~/store/profile';
import {Board, Header, Profile, Museum, Login, Signup} from './components';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import {firebaseApp} from '~/api/firebase/firebase';

const DEFAULT_ROUTE = 'channels';

export const App = () => {
    const route = useLocation();
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        firebaseApp.auth().onAuthStateChanged(user => {
            dispatch(saveUser(user));
        });
    }, []);

    useEffect(() => {
        if (route.pathname === '/') {
            history.push(`/${DEFAULT_ROUTE}`);
        }
    }, [route]);

    return (
        <>
            <Header/>
            <main className="container pt-5 mt-5">
                <Switch>
                    <Route exact path="/profile" component={Profile}/>
                    <Route path="/channels" component={Board}/>
                    <Route path="/museum" component={Museum}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/signup" component={Signup}/>
                    <Route path="*">
                        <h3>Page not found</h3>
                    </Route>

                </Switch>
            </main>
        </>
    );
};
