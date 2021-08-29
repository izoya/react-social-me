import React, {useState} from 'react';
import {Button, Input, makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';

export const AuthForm = ({title, submitButton, onSubmit}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <h1 className={styles.h1}>{title}</h1>
            <Input
                value={email}
                fullWidth={true}
                placeholder='Email'
                onChange={e => setEmail(e.target.value)}/>
            <Input
                type='password'
                value={password}
                fullWidth={true}
                className={styles.input}
                placeholder='Password'
                onChange={e => setPassword(e.target.value)}/>
            <Button className={styles.button} onClick={() => onSubmit(email, password)}>{submitButton}</Button>
        </div>
    );
};

const useStyles = makeStyles(() => {
    return {
        root: {
            display: 'flex',
            flexDirection: 'column',
        },
        h1: {
            marginBottom: '10%',
        },
        input: {
            marginTop: 10,
        },
        button: {
            marginTop: 20,
            alignSelf: 'center',
            backgroundColor: '#c9c9c9',
        },
    };
});

AuthForm.propTypes = {
    title: PropTypes.string.isRequired,
    submitButton: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};
