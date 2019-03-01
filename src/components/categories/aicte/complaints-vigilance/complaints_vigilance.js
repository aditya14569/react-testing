import React, { Component } from 'react';
import Auxillary from '../../../../hoc/Auxillary';
import { Link } from 'react-router-dom';
class Complaints_vigilance extends Component {
    state = {
        options: ["against_institute","vigilance", "certificate", "fee_payment", "ragging", "others"]

    }

    render() {
        return (

            <Auxillary>
                <h1>Complaints vigilance</h1>

                {/* <Eligibility /> */}
                <p>Select a sub-category:</p>
                <ul>
                    {this.state.options.map(str => {
                        let str1 = "/creategrievence/complaints_vigilance/" + str;
                        return (

                            <li><Link to={str1}>{str}</Link></li>
                        )
                    })}
                </ul>
            </Auxillary>
        )
    };
}

export default Complaints_vigilance;