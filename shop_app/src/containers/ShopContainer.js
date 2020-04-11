import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import Request from "../helpers/request";
import Men from "../components/Men";
import Women from "../components/Women";
import Kids from "../components/Kids";
import NewReleases from "../components/NewReleases";
import Sale from "../components/Sale";


class ShopContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      sneakers:[],
      customers: [],
      orders: []
    }

  }

  componentDidMount(){
    const request = new Request();
    const sneakersPromise = request.get('/api/sneakers')
    const customersPromise = request.get("/api/customers")
    const ordersPromise = request.get("/api/customers")

    Promise.all([sneakersPromise, customersPromise,ordersPromise])
    .then((data)=>{
      this.setState({
        sneakers: data[0],
        customers: data[1],
        orders: data[2]
      })
    })

  }





  render(){

    const allItems = this.state.sneakers.map((sneaker, index) =>{
      return(
        <li key={index} className="component-item">
        <div className="component">
        <img src={sneaker.imgLink} alt="image" width="150" height="150"/>
        <h3>Brand: {sneaker.brand}</h3>
        <h5>Model: {sneaker.model}</h5>
        <h5>Size: {sneaker.size}</h5>
        <h5>Price: £{sneaker.retailPrice}</h5>
        </div>
        </li>
      )
    })

    return(
      <Router>
        <Fragment>
          <NavBar />
            <Switch>
            <Route path="/men" component={Men} />
            <Route path="/women" component={Women} />
            <Route path="/kids" component={Kids} />
            <Route path="/newreleases" component={NewReleases} />
            <Route path="/sale" component={Sale} />
            <ul className="component-list">
            {allItems}
            </ul>
            </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default ShopContainer;
