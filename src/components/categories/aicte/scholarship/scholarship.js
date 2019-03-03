import React, { Component } from 'react';
import Auxillary from '../../../../hoc/Auxillary';
import { Link } from 'react-router-dom';
import './scholarship.css'
class Scholarship extends Component {
    state = {
        options: ["Counselling", "Eligibilty", "Portal", "Reimbursement", "other"]

    }

    render() {
        return (

            <Auxillary>
                <div className="ContactData">
                <div className='h3'>Scholarship</div>

            
                <p>Select a sub-category:</p>
                
                    {this.state.options.map(str => {
                        let str1="/creategrievence/scholarship/"+str;
                        return (
                            <Link className='indvItems' to={str1}>{str}</Link>
                            // <li><Link to={str1}>{str}</Link></li>
                        )
                    })}
                </div>
            </Auxillary>
        )
    };
}

export default Scholarship;