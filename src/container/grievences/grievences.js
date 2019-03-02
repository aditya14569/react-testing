import React, {Component} from 'react';
import Axios from 'axios';
import Post from './post/postopen';
class Grievence extends Component{
    state= {
        data : [],
        hasGot :false
    }
    render()
    {
        if(!this.state.hasGot)
        {
            Axios.get('https://sih-ecms-server.herokuapp.com/student/grievances/true', {
            headers: {
            "x-auth": localStorage.getItem("token")
            }
            })
            .then(response => {
                let data1=[...response.data]
                this.setState({data: data1, hasGot:true});
                console.log("hey");
                console.log(response);
            })
            .catch(err => {
            this.setState(this.setState({hasGot:false}));
            console.log(err);
      });
        return(
            <div>Inside grievance</div>
        )
    }
    else 
    {
        const p2 = this.state.data.map(data => {
            return <Post closedBy={data["closedBy"]}
                createdAt= {data["createdAt"]}
                id= {data["id"]}
                isClosed= {data["isClosed"]}
                status= {data["status"]}
                subcategoryId={data["subcategoryId"]}
                subject={data["subject"]}
                // time1= {data["time1"]}
                // time2={data["time2"]}
                // time3= {data["time3"]}
                // timeOF= {data["timeOF"]}
                timeTillEscalation= {data["timeTillEscalation"]}
                updatedAt= {data["updatedAt"]}
                userId= {data["uerId"]} />
        }) 
        return ( p2 );
    }
}
}
export default Grievence;