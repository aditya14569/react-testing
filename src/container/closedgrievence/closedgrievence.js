import React, { Component } from 'react';
import Axios from 'axios';
import Post from './post/postclose';
class Closedgrievence extends Component {
    state = {
        data: [],
        datatwo: [],
        hasGot: false
    }
    clickHandler(id) {
        console.log("logs");
        const url = 'https://sih-ecms-server.herokuapp.com/student/grievancelog/' + id;
        Axios.get(url, {
            headers: {
                "x-auth": localStorage.getItem("token")
            }
        })
            .then(response => {
                let data3 = [...response.data]
                this.setState({ datatwo: data3, hasGot: true });
                console.log("hey");
                console.log(response);
            });
    }
    render() {
        if (!this.state.hasGot) {
            Axios.get('https://sih-ecms-server.herokuapp.com/student/grievances/true', {
                headers: {
                    "x-auth": localStorage.getItem("token")
                }
            })
                .then(response => {
                    let data1 = [...response.data]
                    this.setState({ data: data1, hasGot: true });
                    console.log("hey");
                    console.log(response);
                })
                .catch(err => {
                    this.setState(this.setState({ hasGot: false }));
                    console.log(err);
                });
            return (
                <div>Inside closed grievance</div>
            )
        }
        else {
            const p2 = this.state.data.map(data => {
                return <Post clicked={this.clickHandler.bind(this, data["id"])}
                    closedBy={data["closedBy"]}
                    createdAt={data["createdAt"]}
                    id={data["id"]}
                    isClosed={data["isClosed"]}
                    status={data["status"]}
                    subcategoryId={data["subcategoryId"]}
                    subject={data["subject"]}
                    // time1={data["time1"]}
                    // time2={data["time2"]}
                    // time3={data["time3"]}
                    // timeOF={data["timeOF"]}
                    timeTillEscalation={data["timeTillEscalation"]}
                    updatedAt={data["updatedAt"]}
                    userId={data["uerId"]} 
                    // createdAt: "2019-03-03T00:42:39.000Z"
                    // log: "Please do need money urlink::::"
                    // updatedAt: "2019-03-03T00:42:39.000Z"
                    // userId: 101603356
                    />

            })
            return (p2);
        }
    }
}

export default Closedgrievence;