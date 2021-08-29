import React from 'react';
import {firebaseApp} from '~/api/firebase/firebase';
import {AuthTemplate} from '~/components';
import {AuthForm} from '~/components/Auth/AuthForm';
import {Link} from 'react-router-dom';

const onSubmit = (email, password) => {
    return firebaseApp.auth().createUserWithEmailAndPassword(email, password);
};

export const Signup = () => {
    return (
        <AuthTemplate link={<Link to='login'>Already have an account? Sign in</Link>}>
            <AuthForm title='Join Social.me' submitButton={'Sign up'} onSubmit={onSubmit}/>
        </AuthTemplate>
    );
};
