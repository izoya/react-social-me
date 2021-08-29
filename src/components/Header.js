import {makeStyles} from '@material-ui/core';
import {useSelector} from 'react-redux';
import {firebaseApp} from '~/api/firebase/firebase';
import React from 'react';
import {Link, useParams} from 'react-router-dom';

const menu = [
    {title: 'Messages', alias: 'channels'},
    {title: 'Profile', alias: 'profile'},
    {title: 'Museum', alias: 'museum'},
    {title: 'Login', alias: 'login'},
    {title: 'Signup', alias: 'signup'},
];
const signOut = () => {
    firebaseApp.auth().signOut();
};

export const Header = () => {
    const params = useParams();
    const styles = useStyles();
    const {user} = useSelector(state => state.profile);
    const page = params[0] ? params[0].slice(1) : params.page;

    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Social:me</a>
                <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="navbar-collapse" id="header-nav">
                    {menu.length &&
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        {menu.map(item => (
                            <li key={item.alias} className="nav-item">
                                <Link
                                    className={'nav-link' + (item.alias === page ? ' active' : '')}
                                    to={'/' + item.alias}>
                                    {item.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    }
                </div>
                <div>{user &&
                    <span className={styles.logout_link} onClick={signOut}>Logout from {user.email}</span>
                }
                </div>
            </div>
        </nav>
    );
};

const useStyles = makeStyles(() => {
    return {
        logout_link: {
            cursor: 'pointer',
            color: 'rgba(255, 255, 255, 0.55)',
        },
    };
});
