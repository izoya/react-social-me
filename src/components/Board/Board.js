import React, {useCallback, useEffect, useState} from 'react';
import {Grid, makeStyles, Paper} from '@material-ui/core';
import {Messages} from '../Messages/Messages';
import {Channels} from '../Channels/Channels';

const useStyles = makeStyles(theme => {
    console.log(theme);

    return {
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    };
});

export const Board = () => {
    const classes = useStyles();
    const [messages, setMessages] = useState([]);
    const [activeChannel, setActiveChannel] = useState({});
    const robotMessage = {
        author: 'Robot',
        text: 'You\'re welcome!',
    };

    const handleAddMessage = useCallback(
        (message) => setMessages(state => [...state, message]),
        []
    );

    useEffect(() => {
        const lastMessage = messages[messages.length - 1];

        if (!lastMessage || lastMessage.author === robotMessage.author) return;

        setTimeout(() => handleAddMessage(robotMessage), 1500);
    }, [messages]);

    return (
        <div className={classes.root}>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={3}>
                    <Paper className={classes.paper}>
                        <h1 className="h4 mb-0 lh-1">Channels</h1>
                        <Channels setChannel={setActiveChannel} activeChannel={activeChannel}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={9}>
                    <Paper className={classes.paper}>
                        <h1 className="h4 mb-0 lh-1">Messages</h1>
                        <Messages messages={messages} addMessage={handleAddMessage} channel={activeChannel}/>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};
