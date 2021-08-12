import React, {useCallback, useEffect, useState} from 'react';
import {Grid, makeStyles, Paper} from '@material-ui/core';
import {Messages, Channels} from '../../components';
import {Route, useHistory, Switch, useRouteMatch} from 'react-router-dom';

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
const channels = [
    {
        id: 1,
        name: 'General',
        alias: 'general',
    },
    {
        id: 2,
        name: 'Friends',
        alias: 'friends',
    },
    {
        id: 3,
        name: 'Family',
        alias: 'family',
    },

];
const robotMessage = {
    author: 'Robot',
    text: 'You\'re welcome!',
};

export const Board = () => {
    const classes = useStyles();
    const routeMatch = useRouteMatch();
    const history = useHistory();

    const [messages, setMessages] = useState([]);
    const [activeChannel, setActiveChannel] = useState({});

    useEffect(() => {
        if (routeMatch.isExact) {
            history.push(`${routeMatch.url}/${channels[0].alias}`);
        }
    }, [routeMatch]);

    const handleAddMessage = useCallback(
        ({author, text, channel}) => setMessages(state => {
            let currentChannel = state?.find((item) => {
                return item.channelId === channel.id;
            });
            if (!currentChannel) {
                currentChannel = {
                    channelId: channel.id,
                    messages: [],
                };
            }
            currentChannel.messages.push({author, text});

            setTimeout(() => setMessages(state => {
                currentChannel.messages.push(robotMessage);

                return [...state, currentChannel];
            }), 2500);

            return [...state, currentChannel];
        }),
        []
    );

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <h1 className="h4 mb-0 lh-1">Channels</h1>
                        <Switch>
                            <Route path="/channels/:channelAlias">
                                <Channels setChannel={setActiveChannel}
                                    activeChannel={activeChannel}
                                    channels={channels}/>
                            </Route>
                        </Switch>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Messages
                        messages={messages}
                        addMessage={handleAddMessage}
                        channel={activeChannel}
                        classes={classes}/>
                </Grid>
            </Grid>
        </div>
    );
};
