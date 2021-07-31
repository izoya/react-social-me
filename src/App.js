import React, {Component} from "react";
import {Message} from "./components/Message/Message";

export class App extends Component {
    render() {
        return (
            <div>
                <h1 className="bg-info">React!</h1>
                <Message message="Hi! I'm Zoya.">
                    No messages just yet.
                </Message>
            </div>
        );
    }
}
