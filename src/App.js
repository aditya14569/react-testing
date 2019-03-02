import React, { Component } from 'react';
import Layout from './components/layout';
import Front from '../src/components/front/front';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import './App.css';

class App extends Component {
  constructor(props)
  {
    super(props);
    this.state={error:false,authenticated:false};
  }
  // onclickHandler() {
  //   localStorage.removeItem("token");
  //   this.setState({authenticated: !this.state.authenticated});
  // }
  authFailHandler() {
    this.setState({authenticated: !this.state.authenticated});
  }
  // componentDidMount() {
  //   axios.get('https://sih-ecms-server.herokuapp.com/student/grievances/true', {
  //     headers: {
  //       "x-auth": localStorage.getItem("token")
  //     }
  //   })
  //     .then(response => {
  //       console.log("hey")
  //       console.log(response)
  //     })
  //     .catch(err => {
  //       this.setState({ error: true });
  //       console.log(err);
  //     });
  // }
  render() {
    
    console.log(window.error);
    if(this.state.error)
     return (
     <Front/>
     );
    else 
      return (
     <BrowserRouter> 
     <div className="App">
        {/* <Front /> */}
        <div className='navbar fixed-top'>
          <div className='brand'>
            <img
              alt=""
              src="/logo.svg"
              width="30"
              height="30"
              className="d-inline-block align-top"
            />
            {'Effective Complaint Management System'}
          </div>
          <Button variant="danger" size="sm" >Log Out</Button>
        </div>
        <Layout />
      </div></BrowserRouter>
    // <Front />
    );
    
  }
}

export default App;
