import React, {useCallback, useEffect, useRef, useState} from 'react';
import PropTypes from 'prop-types';
import {Paper} from '@material-ui/core';
import {useSelector, useDispatch, shallowEqual} from 'react-redux';
import {useParams} from 'react-router-dom';
import {addMessage} from '../../store/messages';

export const Messages = ({classes}) => {
    const dispatch = useDispatch();
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const inputRef = useRef(null);
    const {channelAlias} = useParams();
    const messages = useSelector(({messages}) => messages.messages[channelAlias] || [], shallowEqual);

    useEffect(() => {
        inputRef.current.focus();
    }, [inputRef, channelAlias]);

    const handleAddMessage = useCallback((e) => {
        e.preventDefault();
        if (!text) return;
        dispatch(addMessage(
            {author, text},
            channelAlias
        ));
        setText('');
        inputRef.current.focus();
    }, [author, text, channelAlias]);

    return (
        <Paper className={classes.paper}>
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                {messages
                    ? messages.map((message, id) => <div className="d-flex text-muted pt-3" key={id}>
                        <p className="pb-3 mb-0 small lh-sm border-bottom d-block w-100">
                            <strong className="d-block text-gray-dark mb-2">@{message.author}</strong>
                            {message.text}
                        </p>
                    </div>
                    )
                    : 'No messages just yet'
                }
                <h6 className="border-bottom pb-2 mb-0 mt-5">Leave message:</h6>
                <form>
                    <div className="mb-3">
                        <label htmlFor="author" className="form-label">Name</label>
                        <input
                            value={author}
                            type="text"
                            className="form-control"
                            id="author"
                            placeholder="Your name"
                            onChange={(e) => setAuthor(e.target.value)}/>
                    </div>
                    <div className="mb-3">
                        <label htmlFor="text" className="form-label">Message</label>
                        <textarea
                            ref={inputRef}
                            value={text}
                            className="form-control"
                            id="text"
                            rows="3"
                            placeholder="Reply..."
                            onChange={(e) => setText(e.target.value)}/>
                    </div>
                    <button type="button" className="btn btn-primary" onClick={handleAddMessage}>
                        Submit
                    </button>
                </form>
            </div>
        </Paper>
    );
};

Messages.propTypes = {
    classes: PropTypes.object,
};
