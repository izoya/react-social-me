import React, {useState} from 'react';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import {FolderRounded, FolderOpenRounded} from '@material-ui/icons';
import PropTypes from 'prop-types';

export const Channels = ({setChannel, activeChannel}) => {
    const [channels] = useState([
        {
            id: 1,
            name: 'General',
        },
        {
            id: 2,
            name: 'Friends',
        },
        {
            id: 3,
            name: 'Family',
        },

    ]);

    return (
        <List className="w-100">
            {channels && channels.map(channel => (
                <ListItem
                    key={channel.id}
                    button={true}
                    onClick={() => setChannel(channel)}
                    selected={activeChannel.id === channel.id}>
                    <ListItemAvatar>
                        <Avatar>
                            {activeChannel.id === channel.id
                                ? <FolderOpenRounded/>
                                : <FolderRounded/>
                            }
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={channel.name}/>
                </ListItem>
            ))}
        </List>);
};

Channels.propTypes = {
    setChannel: PropTypes.func,
    activeChannel: PropTypes.object,

};
