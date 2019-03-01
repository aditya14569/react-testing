import React, { Component } from 'react';
import Auxillary from '../../../../hoc/Auxillary';
import { Link } from 'react-router-dom';
class Right_to_information extends Component {
    state = {
        options: ["RTI-related"]

    }

    render() {
        return (

            <Auxillary>
                <h1>Scholarship</h1>

                {/* <Eligibility /> */}
                <p>Select a sub-category:</p>
                <ul>
                    {this.state.options.map(str => {
                        let str1 = "/creategrievence/right_to_information/" + str;
                        return (

                            <li><Link to={str1}>{str}</Link></li>
                        )
                    })}
                </ul>
            </Auxillary>
        )
    };
}

export default Right_to_information;