import React, { Component } from 'react';
import Auxillary from '../../../../hoc/Auxillary';
import { Link } from 'react-router-dom';
import './cv.css'
class Complaints_vigilance extends Component {
    state = {
        options: ["against_institute","vigilance", "certificate", "fee_payment", "ragging", "others"]

    }

    render() {
        return (

            <Auxillary>
                <div className="ContactData">
                <div className='h3'>Complaints vigilance</div>

                    {/* <Eligibility /> */}
                    <p>Select a sub-category:</p>

                        {this.state.options.map(str => {
                            let str1 = "/creategrievence/complaints_vigilance/" + str;
                            return (

                                <Link to={str1} className='indvItems'>{str}</Link>
                            )
                        })}


                </div>
                
                
            </Auxillary>
        )
    };
}

export default Complaints_vigilance;