import React, {useCallback, useState} from 'react';

export const Messages = props => {
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');

    const handleAddMessage = useCallback((e) => {
        e.preventDefault();
        props.addMessage({author, text});
        setText('');
    }, [author, text]);

    return (
        <>
            <div className="d-flex align-items-center p-3 my-3 text-white bg-secondary rounded shadow-sm">
                <i className="d-block"/>
                <div className="lh-1">
                    <h1 className="h6 mb-0 lh-1">Messages</h1>
                </div>
            </div>
            <div className="my-3 p-3 bg-body rounded shadow-sm">
                {props.messages
                    ? props.messages.map((message, index) =>
                        <div className="d-flex text-muted pt-3" key={index}>
                            <svg className="bd-placeholder-img flex-shrink-0 me-2 rounded" width="32" height="32"
                                 xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: 32x32"
                                 preserveAspectRatio="xMidYMid slice" focusable="false">
                                <title>{message.author}</title>
                                <rect width="100%" height="100%" fill="#e83e8c"/>
                                <text x="50%" y="50%" fill="#e83e8c" dy=".3em">32x32</text>
                            </svg>

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
        </>
    );
};
