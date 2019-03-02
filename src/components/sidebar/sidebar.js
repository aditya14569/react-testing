import React from 'react';
import './sidebar.css';
import Auxillary from '../../hoc/Auxillary';
import {NavLink} from 'react-router-dom';
const sidebar = (props) => {
    return (
        <Auxillary>
            <section id="body" className="width">
                <aside id="sidebar" className="column-left">

                    <header>
                        <h1><a href="#">Grievence Portal</a></h1>
                    </header>

                    <nav id="mainnav">
                        <ul>
                            <li><NavLink to="/grievence" exact activeClassName="selected-item">Open Grievences</NavLink></li> 
                            <li><NavLink to="/closedgrievence" exact activeClassName="selected-item">Closed Grievences</NavLink></li>
                            <li><NavLink to="/creategrievence" exact activeClassName="selected-item">Create Grievences</NavLink></li>
                            <li><NavLink to="/creategrievencelog" exact activeClassName="selected-item">Create Grievences Log</NavLink></li>
                            <li><NavLink to="/viewgrievence" exact activeClassName="selected-item">View Grievance (with log)</NavLink></li>
                        </ul>
                    </nav>



                </aside>
                <section id="content" className="column-right">
                    {/* <article>

                    </article>

                    <article class="expanded">

                    </article> */}
                </section>

                <div className="clear"></div>

            </section>
        </Auxillary>    

    )
};

export default sidebar;