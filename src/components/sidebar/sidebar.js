import React from 'react';
// import './sidebar.css';
import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import Auxillary from '../../hoc/Auxillary';
import {withRouter} from 'react-router-dom';
const sbItem = {
    margin: '40px',
    border: '2px solid grey'
  };
const sidebar = (props) => {
    return (
        <Auxillary>
            <SideNav
                onSelect={(selected) => {
                    const to = '/' + selected;
                        props.history.push(to);
                    
                }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected='grievence'>
                    <NavItem eventKey="grievence">
                        <NavIcon>
                            <i className="fa fa-fw fa-envelope-open-o" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Open Grievence
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="closedgrievence">
                        <NavIcon>
                            <i className="fa fa-fw fa-window-close-o" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Closed Grievence
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="creategrievence">
                        <NavIcon>
                        <i class="fas fa-pen-square"></i>
                            <i className="fa fa-fw fa-edit" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            CreateGrievence
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="creategrievencelog">
                        <NavIcon>
                            <i className="fa fa-fw fa-th-list" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            Create Grievence Log
                        </NavText>
                    </NavItem>
                    <NavItem eventKey="viewgrievence">
                        <NavIcon>
                            <i className="fa fa-fw fa-list-alt" style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>
                            View Grievence Log
                        </NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>
        </Auxillary>    

    )
};

export default withRouter(sidebar);