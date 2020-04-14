import React, {Component, Redirect} from 'react';
// import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from '../../helpers/request.js';

class LoginForm extends Component{
  constructor(props){
    super(props);
    this.state = {
      login:{
        userName:'',
        password: ''
      },
      customer:''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    
  }

  componentDidMount(){

  }

  handleChange(event){
    let propertyName = event.target.name;
    let login = this.state.login
    login[propertyName] = event.target.value;
    this.setState({login:login})

  }
handleSubmit(event){
  event.preventDefault();
  const request = new Request();
  const userName = this.state.login.userName
  const password = this.state.login.password

  request.get("/api/customers/login?userName="+userName+"&password="+password)
  .then((data)=>{
    this.setState({customer: data})
    this.props.onLoginCustomer(this.state.customer)
    this.props.onLogin(this.state.login.userName)
  })
<<<<<<< HEAD
=======

  this.props.onLogin(this.state.login.userName)

>>>>>>> feature/emailconf

}


  render(){


    return(

      <div>

      <form onSubmit={this.handleSubmit}>
      <h2>User Name</h2>
      <input type="text" placeholder="user name" name="userName" onChange={this.handleChange} value={this.state.userName}/>

      <h2>Password</h2>
      <input type="text" placeholder="password" name="password" onChange={this.handleChange} value={this.state.password}/>
      <button type="submit">Login</button>
      </form>

      <h1>{this.state.customer.userName}</h1>

      </div>
    )
  }
}

export default LoginForm;
