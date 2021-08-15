import React, {useEffect} from 'react';
import {Avatar, List, ListItem, ListItemAvatar, ListItemText} from '@material-ui/core';
import {FolderRounded, FolderOpenRounded} from '@material-ui/icons';
import PropTypes from 'prop-types';
import {Link, useParams, useHistory} from 'react-router-dom';

export const Channels = ({channels, setChannel, activeChannel}) => {
    const params = useParams();
    const history = useHistory();

    useEffect(() => {
        !channels.find(item => item.alias === params.channelAlias) &&
            history.push('/404');

        !activeChannel.id && setChannel(channels.find(item => item.alias === params.channelAlias));
    }, [params]);

    return (
        <List className="w-100">
            {channels && channels.map(channel => (
                <ListItem
                    key={channel.id}
                    button={true}
                    onClick={() => setChannel(channel)}
                    selected={activeChannel.id === channel.id}
                    component={Link}
                    to={'' + channel.alias}>
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
    setChannel: PropTypes.func.isRequired,
    activeChannel: PropTypes.object,
    channels: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            name: PropTypes.string,
            alias: PropTypes.string,
        })
    ).isRequired,
};
