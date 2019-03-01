import React, { Component } from 'react';
import Auxillary from '../../../../hoc/Auxillary';
import { Link } from 'react-router-dom';
class Scholarship extends Component {
    state = {
        options: ["dispensary", "road_and_pathway", "sports_infrastructure", "sports_material", "others"]

    }

    render() {
        return (

            <Auxillary>
                <h1>Scholarship</h1>

                {/* <Eligibility /> */}
                <p>Select a sub-category:</p>
                <ul>
                    {this.state.options.map(str => {
                        let str1 = "/creategrievence/facility/" + str;
                        return (

                            <li><Link to={str1}>{str}</Link></li>
                        )
                    })}
                </ul>
            </Auxillary>
        )
    };
}

export default Scholarship;