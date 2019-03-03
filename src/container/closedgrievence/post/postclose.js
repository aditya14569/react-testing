import React, {Component} from 'react';
import './postclose.css'
import Axios from 'axios';
class Post extends Component {
    clickescallateHandler() {
        const url = 'https://sih-ecms-server.herokuapp.com/student/grievance/' + this.props.id;
        if (this.props.closedBy == 'P' || this.props.closedBy == 'C')
        {
            Axios.patch(url, {
                "status": 'A'
            }, {
                    headers: {
                        "x-auth": localStorage.getItem("token")
                    }
                }
            );
        }
        else
            window.alert("cannot be escallated");
    };
    render() {
    return (
        <div className='anyCard'>
            <div className='oneClass'>
                <div><span className='boldFont'>id: </span>{this.props.id}</div>
                <div><span className='boldFont'>createdAt:</span> {this.props.createdAt}</div>
            </div>
            <div className='oneClass'>
                <div><span className='boldFont'>isClosed:</span> {this.props.isClosed}</div>
                <div><span className='boldFont'>updatedAt:</span> {this.props.updatedAt}</div>
            </div>
            <button onClick={() => this.clickescallateHandler()}>Escallate</button>
            <div>
            <span className='boldFont'>subject:</span> {this.props.subject}
            </div>
            <div className='oneClass'>
                <div><span className='boldFont'>timeTillEscalation:</span> {this.props.timeTillEscalation}</div>
                <div><span className='boldFont'>status:</span> {this.props.status}</div>
            </div>
            <div className='twoClass'>
                <div><span className='boldFont'>userId:</span> {this.props.userId}</div>
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
    );
        }
}
export default Post;