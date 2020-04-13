import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NavBar from '../NavBar.js';
import Request from "../helpers/request";
import Men from "../components/Men";
import Women from "../components/Women";
import Kids from "../components/Kids";
import NewReleases from "../components/NewReleases";
import Sale from "../components/Sale";
import LoginForm from '../components/login/LoginForm';
import SneakerList from '../components/sneakers/SneakerList';
import SneakerDetail from '../components/sneakers/SneakerDetail';

import Filter from "./Filter";

class ShopContainer extends Component{
  constructor(props){
    super(props);
    this.state = {
      sneakers:[],
      filteredSneakers: [],
      filterIsOn: false,
      customers: [],
      orders: [],
      loginName: 'Login',
      loggedInCustomer:''
    }

    this.handleLoginNameChange = this.handleLoginNameChange.bind(this)
    this.handleLoginCustomer = this.handleLoginCustomer.bind(this)

    this.handleFilterChangeModel = this.handleFilterChangeModel.bind(this);
    this.handleFilterChangeBrand = this.handleFilterChangeBrand.bind(this);
    this.handleFilterChangeSize= this.handleFilterChangeSize.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
    this.findSneakerById = this.findSneakerById.bind(this);

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

  findSneakerById(id) {
    return this.state.sneakers.find((sneaker) => {
      return sneaker.id === parseInt(id)
    })
  }

  handleFilterChangeBrand(brandName) {
  if (this.state.filterIsOn) {
    const filteredSneakersByBrand = this.state.filteredSneakers.filter((sneaker) => {
      return sneaker.brand == brandName
    })
    this.setState({filteredSneakers: filteredSneakersByBrand, filterIsOn: true});
  } else {
    const filteredSneakersByBrand = this.state.sneakers.filter((sneaker) => {
      return sneaker.brand == brandName
    })
    this.setState({filteredSneakers: filteredSneakersByBrand, filterIsOn: true});
  }
}

handleFilterChangeModel(modelName) {
  if (this.state.filterIsOn) {
    const filteredSneakersByModel = this.state.filteredSneakers.filter((sneaker) => {
      return sneaker.model == modelName
    })
    this.setState({filteredSneakers: filteredSneakersByModel, filterIsOn: true});
  } else {
    const filteredSneakersByModel = this.state.sneakers.filter((sneaker) => {
      return sneaker.model == modelName
    })
    this.setState({filteredSneakers: filteredSneakersByModel, filterIsOn: true});
  }
}

handleFilterChangeSize(size) {
  if (this.state.filterIsOn) {
    const filteredSneakersBySize = this.state.filteredSneakers.filter((sneaker) => {
      return sneaker.size == size
    })
    this.setState({filteredSneakers: filteredSneakersBySize, filterIsOn: true});
  } else {
    const filteredSneakersBySize = this.state.sneakers.filter((sneaker) => {
      return sneaker.size == size
    })
    this.setState({filteredSneakers: filteredSneakersBySize, filterIsOn: true});
  }
}


handleClearFilter() {
  this.setState({filterIsOn: false});
  let filterBoxes = document.getElementsByClassName('filter-select');
  for (let i=0; i<filterBoxes.length; i++) {
    filterBoxes[i].selectedIndex = 0
  }
}



handleLoginNameChange(even){

  this.setState({loginName: even})
}
handleLoginCustomer(even){
  console.log(even);
  this.setState({loggedInCustomer:even})
}



  render(){

    // const allItems = this.state.sneakers.map((sneaker, index) =>{
    //   return(
    //     <li key={index} className="component-item">
    //     <div className="component">
    //     <img src={sneaker.imgLink} alt="image" width="150" height="150"/>
    //     <h3>Brand: {sneaker.brand}</h3>
    //     <h5>Model: {sneaker.model}</h5>
    //     <h5>Size: {sneaker.size}</h5>
    //     <h5>Price: £{sneaker.retailPrice}</h5>
    //     </div>
    //     </li>
    //   )
    // })


    let filteredItems = [];
    if (this.state.filteredSneakers.length > 0) {

      filteredItems = this.state.filteredSneakers.map((sneaker, index) =>{
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
    }


    return(
      <Router>
        <Fragment>
          <NavBar name={this.state.loginName}/>

          <Filter
          sneakers={this.state.sneakers} onFilterChangeBrand={this.handleFilterChangeBrand}
          onFilterChangeModel={this.handleFilterChangeModel}
          onFilterChangeSize={this.handleFilterChangeSize}
          onClearFilter={this.handleClearFilter}
          filter={this.state.filterIsOn}
          filteredSneakers={this.state.filteredSneakers}/>

          <ul className="component-list">
          </ul>


            <Switch>
            <Route path="/login" render={(props)=>{
              return<LoginForm onLogin={this.handleLoginNameChange} onLoginCustomer={this.handleLoginCustomer} />
            }}/>
            <Route path="/men" component={Men} />
            <Route path="/women" component={Women} />
            <Route path="/kids" component={Kids} />
            <Route path="/newreleases" component={NewReleases} />
            <Route path="/sale" component={Sale} />
            <Route exact path='/sneakers/:id' render = {(props) =>
            {
              const id = props.match.params.id;
              const sneaker = this.findSneakerById(id)
              return <SneakerDetail sneaker = {sneaker}/>
            }}/>
            <Route path='/' render = {(props) => {
              return <SneakerList sneakers = {this.state.sneakers}/>
            }} />
            </Switch>
        </Fragment>
      </Router>
    )
  }
}

export default ShopContainer;
