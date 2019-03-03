import React from 'react';
const post = (props) => {
    return (
        <div onClick={props.clicked}>
            <p>closedBy: {props.closedBy}</p>
            <p>createdAt: {props.createdAt}</p>
            <p>id: {props.id}</p>
            <p>isClosed: {props.isClosed}</p>
            <p>status: {props.status}</p>
            <p>subcategoryId: {props.subcategoryId}</p>
            <p>subject: {props.subject}</p>
            {/* <p>time1: {props.time1}</p>
            <p>time2: {props.time2}</p>
            <p>time3: {props.time3}</p>
            <p>timeOF: {props.timeOF}</p> */}
            <p>timeTillEscalation: {props.timeTillEscalation}</p>
            <p>updatedAt: {props.updatedAt}</p>
            <p>userId: {props.userId}</p>
        </div>
    )
}
export default post;