import React, { Component } from 'react';
import Auxillary from '../../../../hoc/Auxillary';
import { Link } from 'react-router-dom';
import './RTI.css';
class Right_to_information extends Component {
    state = {
        options: ["RTI-related"]

    }

    render() {
        return (

            <Auxillary>
                <div className='h3'>Right To Information</div>

                {/* <Eligibility /> */}
                <p>Select a sub-category:</p>
                    {this.state.options.map(str => {
                        let str1 = "/creategrievence/right_to_information/" + str;
                        return (

                            <Link to={str1} className='indvItems'>{str}</Link>
                        )
                    })}
            </Auxillary>
        )
    };
}

export default Right_to_information;