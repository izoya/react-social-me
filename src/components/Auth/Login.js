import React from 'react';
import {firebaseApp} from '~/api/firebase/firebase';
import {AuthTemplate} from '~/components';
import {AuthForm} from '~/components/Auth/AuthForm';
import {Link} from 'react-router-dom';

const onSubmit = (email, password) => {
    return firebaseApp.auth().signInWithEmailAndPassword(email, password);
};

export const Login = () => {
    return (
        <AuthTemplate link={<Link to='signup'>No account? Create one</Link>}>
            <AuthForm title='Welcome back' submitButton={'Sign in'} onSubmit={onSubmit}/>
        </AuthTemplate>
    );
};
