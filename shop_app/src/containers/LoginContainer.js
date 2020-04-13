import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../helpers/request.js';

class LoginContainer extends Component{
  constructor(props){
    this.state = {
      userName:'',
      password:
    }
  }

  componentDidMount(){

  }


  render(){
    return(
      <div>
      <h1>User Name</h1>
      <input type="text" placeholder="user name" name="userName" onChange={this.handleChange} value={this.state.userName}

      <h1>Password</h1>
      <input type="text" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password}
      </div>
    )
  }
}
