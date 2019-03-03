import React,{Component} from 'react';
import './postopen.css'
import Axios from 'axios';
class Post extends Component {
    clickcloseHandler() {
        const url ='https://sih-ecms-server.herokuapp.com/student/grievance/'+ this.props.id;
        Axios.patch(url,{
            "isClosed": true
        },{
            headers: {
                "x-auth": localStorage.getItem("token")
            }
        }
        );
    }
    render() {
    return (
        <div className='anyCard'>
            <div className='oneClass'>
                <div><span className='boldFont'>id: </span>{this.props.id}</div>
                <div><span className='boldFont'>createdAt:</span> {this.props.createdAt}</div>
            </div>
            <button onClick={()=> this.clickcloseHandler()}>Close</button>
            <div className='oneClass'>
                <div><span className='boldFont'>isClosed:</span> {this.props.isClosed}</div>
                <div><span className='boldFont'>updatedAt:</span> {this.props.updatedAt}</div>
            </div>
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
        </div>
    );
        }
}
export default Post;