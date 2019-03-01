import React from 'react';

const secondlist = (props) => {
    let sl = props.listextra;
    let s2 = (<div>Enter the vlaue of the category</div>)
    if(props.setvalue)
    {
        s2= (
            <select>
                <option disabled selected>--Choose subCategory--</option>
                {props.listextra.map(str => (
                    <option value={str}>{str}</option>
                ))}
            </select>
        )
    }
    return s2;

}
export default secondlist;