import React, { Component } from 'react';
import Auxillary from '../../../../hoc/Auxillary';
import { Link } from 'react-router-dom';
import './hostel.css'
class Scholarship extends Component {
    state = {
        options: ["electricity", "furniture", "hostelstaff", "mess_fee","mess_food","mess_menu","mess_staff","watersupply","wifi", "others"]

    }

    render() {
        return (

            <Auxillary>
                <div className="ContactData">
                <div className='h3'>Hostel</div>

                {/* <Eligibility /> */}
                <p>Select a sub-category:</p>

                    {this.state.options.map(str => {
                        let str1 = "/creategrievence/hostel/" + str;
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