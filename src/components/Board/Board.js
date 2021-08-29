import React, {useEffect, useState} from 'react';
import {Grid, makeStyles, Paper} from '@material-ui/core';
import {Messages, Channels} from '../../components';
import {Route, useHistory, Switch, useRouteMatch} from 'react-router-dom';
import {useSelector} from 'react-redux';

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

export const Board = () => {
    const classes = useStyles();
    const routeMatch = useRouteMatch();
    const history = useHistory();
    const {channels} = useSelector(state => state.channels);

    const [activeChannel, setActiveChannel] = useState({});

    useEffect(() => {
        if (routeMatch.isExact) {
            history.push(`${routeMatch.url}/${channels[0].alias}`);
        }
    }, [routeMatch]);

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
