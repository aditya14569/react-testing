import React, { Component } from 'react';
import Auxillary from '../../../../hoc/Auxillary';
import { Link } from 'react-router-dom';
import './facility.css';
class Scholarship extends Component {
    state = {
        options: ["dispensary", "road_and_pathway", "sports_infrastructure", "sports_material", "others"]

    }

    render() {
        return (

            <Auxillary>
                <div className="ContactData">
                <div className='h3'>Facility</div>

                {/* <Eligibility /> */}
                <p>Select a sub-category:</p>

                    {this.state.options.map(str => {
                        let str1 = "/creategrievence/facility/" + str;
                        return (

                            <Link to={str1} className='indvItems'>{str}</Link>
                        )
                    })}
                </div>
            </Auxillary>
        )
    };
}

export default Scholarship;