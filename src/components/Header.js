import React from 'react';
import {Link} from 'react-router-dom';

export const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark" aria-label="Main navigation">
            <div className="container-fluid">
                <a className="navbar-brand" href="/">Social:me</a>
                <button className="navbar-toggler p-0 border-0" type="button" id="navbarSideCollapse" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"/>
                </button>

                <div className="navbar-collapse" id="header-nav">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" to="/channels">Messages</Link>
                        </li>
                        <div className="w-100"/>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/profile">Profile</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link active" to="/nonexistent">404</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};
