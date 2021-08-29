import React, {useEffect, useState} from 'react';
import {Grid, makeStyles, Paper} from '@material-ui/core';
import {getChannelsFB} from '~/store/channels';
import {getMessagesFB} from '~/store/messages';
import {Messages, Channels} from '../../components';
import {Route, useHistory, Switch, useRouteMatch} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
}));

const addChannel = () => {
    // firebaseDB.ref('channels').child('general').set({id: 1, name: 'General', alias: 'general'});
    // firebaseDB.ref('channels').child('friends').set({id: 2, name: 'Friends', alias: 'friends'});
    // firebaseDB.ref('channels').child('family').set({id: 3, name: 'Family', alias: 'family'});
};

export const Board = () => {
    const classes = useStyles();
    const routeMatch = useRouteMatch();
    const dispatch = useDispatch();
    const history = useHistory();
    const {channels} = useSelector(state => state.channels);

    const [activeChannel, setActiveChannel] = useState({});

    useEffect(() => {
        if (routeMatch.isExact) {
            history.push(`${routeMatch.url}/${channels[0].alias}`);
        }
    }, [routeMatch]);

    useEffect(() => {
        dispatch(getChannelsFB());
        dispatch(getMessagesFB());
    }, [dispatch]);

    return (
        <div className={classes.root}>
            <Switch>
                <Route path="/channels/:channelAlias">
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={3}>
                            <Paper className={classes.paper}>
                                <Channels setChannel={setActiveChannel}
                                    activeChannel={activeChannel}
                                />
                            </Paper>
                        </Grid>
                        <Grid item xs={12} sm={9}>
                            <Messages classes={classes}/>
                        </Grid>
                    </Grid>
                </Route>
            </Switch>
        </div>
    );
};
