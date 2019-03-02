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
                <div className='h3'>Scholarship</div>

                {/* <Eligibility /> */}
                <p>Select a sub-category:</p>
                {/* <ul> */}
                    {this.state.options.map(str => {
                        let str1="/creategrievence/scholarship/"+str;
                        return (
                            <Link className='indvItems' to={str1}>{str}</Link>
                            // <li><Link to={str1}>{str}</Link></li>
                        )
                    })}
                {/* </ul> */}
            </Auxillary>
        )
    };
}

export default Scholarship;