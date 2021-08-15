import React, {useEffect} from 'react';
import {Board, Header, Profile} from './components';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';

const DEFAULT_ROUTE = 'channels';

export const App = () => {
    const route = useLocation();
    const history = useHistory();

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
                    <Route path="/channels" component={Board} />
                    <Route path="*">
                        <h3>Page not found</h3>
                    </Route>

                </Switch>
            </main>
        </>
    );
};
