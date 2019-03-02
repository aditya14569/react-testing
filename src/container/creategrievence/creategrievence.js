import React, {Component} from 'react';
import Auxillary from '../../hoc/Auxillary';
import {Link} from 'react-router-dom';
import './creategrievence.css'
import Button from 'react-bootstrap/Button';
class Creategrievence extends Component{
    state = {
        options : {
            scholarship : ["sissue1","sissue2"],
            right_to_information : ["rissue1","rissue2"],
            complaints_vigilance : ["cissue1","cissue2"],
            facility : ["fissue1","fissue2"],
            hostel : ["hissue1","hissue2"]
        },

    }
    
    render () 
    {
        return (
            
            <Auxillary>
                <div className='h4'>Select a category :</div>
                        {Object.keys(this.state.options).map(str => {
                            let str1="/creategrievence/"+str;
                           return (
                            <Link className='indvItems' to={str1}>{str}</Link>
                        )})}
            </Auxillary>
        )
    };
} 
export default Creategrievence;