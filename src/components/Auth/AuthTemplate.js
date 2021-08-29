import React from 'react';
import {makeStyles} from '@material-ui/core';
import PropTypes from 'prop-types';

export const AuthTemplate = ({children, link}) => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            {children}
            <div className={styles.link}>{link}</div>

        </div>
    );
};

const useStyles = makeStyles(() => {
    return {
        root: {
            width: 300,
            margin: '0 auto',
            marginTop: '10%',
        },
        link: {
            display: 'flex',
            justifyContent: 'center',
            color: '#9a9a9a',
            marginTop: 30,
        },
    };
});

AuthTemplate.propTypes = {
    children: PropTypes.object,
    link: PropTypes.object.isRequired,
};

