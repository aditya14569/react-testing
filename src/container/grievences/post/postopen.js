import React from 'react';
import './postopen.css'
const post = (props) => {
    return (
        // <div>
        //     <p>closedBy: {props.closedBy}</p>
        //     <p>createdAt: {props.createdAt}</p>
        //     <p>id: {props.id}</p>
        //     <p>isClosed: {props.isClosed}</p>
        //     <p>status: {props.status}</p>
        //     <p>subcategoryId: {props.subcategoryId}</p>
        //     <p>subject: {props.subject}</p>
        //     {/* <p>time1: {props.time1}</p>
        //     <p>time2: {props.time2}</p>
        //     <p>time3: {props.time3}</p>
        //     <p>timeOF: {props.timeOF}</p> */}
        //     <p>timeTillEscalation: {props.timeTillEscalation}</p>
        //     <p>updatedAt: {props.updatedAt}</p>
        //     <p>userId: {props.userId}</p>
        // </div>
        <div className='anyCard'>
            <div className='oneClass'>
                <div><span className='boldFont'>id: </span>{props.id}</div>
                <div><span className='boldFont'>createdAt:</span> {props.createdAt}</div>
            </div>
            <div className='oneClass'>
                <div><span className='boldFont'>isClosed:</span> {props.isClosed}</div>
                <div><span className='boldFont'>updatedAt:</span> {props.updatedAt}</div>
            </div>
            <div>
            <span className='boldFont'>subject:</span> {props.subject}
            </div>
            <div className='oneClass'>
                <div><span className='boldFont'>timeTillEscalation:</span> {props.timeTillEscalation}</div>
                <div><span className='boldFont'>status:</span> {props.status}</div>
            </div>
            <div className='twoClass'>
                <div><span className='boldFont'>userId:</span> {props.userId}</div>
            </div>
            {/* <p>closedBy: {props.closedBy}</p>
            <p>createdAt: {props.createdAt}</p>
            <p>id: {props.id}</p>
            <p>isClosed: {props.isClosed}</p>
            <p>status: {props.status}</p>
            <p>subcategoryId: {props.subcategoryId}</p>
            <p>subject: {props.subject}</p> */}

            {/* <p>time1: {props.time1}</p>
            <p>time2: {props.time2}</p>
            <p>time3: {props.time3}</p>
            <p>timeOF: {props.timeOF}</p> */}

            {/* <p>timeTillEscalation: {props.timeTillEscalation}</p>
            <p>updatedAt: {props.updatedAt}</p>
            <p>userId: {props.userId}</p> */}
        </div>
    )
}
export default post;