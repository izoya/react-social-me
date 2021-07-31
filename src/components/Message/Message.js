import React from "react";

export const Message = (props) => {
    return (
        <>
            <h6 className="my-5">Messages</h6>
            <div className="card mt-5">
                <div className="card-body">
                    {props.message ?? props.children}
                </div>
            </div>
        </>

    )
}