import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Redirect } from "react-router-dom";
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
import Basket from "../components/basket/Basket.js";
import MyDetails from '../components/mydetails/MyDetails';

// css
import Navbar from 'react-bootstrap/Navbar';




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
      loggedInCustomer:null,
      basket: []

    }

    this.handleLoginNameChange = this.handleLoginNameChange.bind(this)
    this.handleLoginCustomer = this.handleLoginCustomer.bind(this)

    this.handleFilterChangeModel = this.handleFilterChangeModel.bind(this);
    this.handleFilterChangeBrand = this.handleFilterChangeBrand.bind(this);
    this.handleFilterChangeSize= this.handleFilterChangeSize.bind(this);
    this.handleClearFilter = this.handleClearFilter.bind(this);
    this.findSneakerById = this.findSneakerById.bind(this);

    this.findAllSneakersByDeparment = this.findAllSneakersByDeparment.bind(this);
    this.handleDepartmentClicked = this.handleDepartmentClicked.bind(this);
    this.handleDepartmentClickedWomen = this.handleDepartmentClickedWomen.bind(this);
    this.handleDepartmentClickedChildren = this.handleDepartmentClickedChildren.bind(this);
    this.handleDepartmentClickedAll = this.handleDepartmentClickedAll.bind(this);

    // basket
    this.handleAddToBasket = this.handleAddToBasket.bind(this);
    this.handlePurchase = this.handlePurchase.bind(this);
    this.handleAllDetails = this.handleAllDetails.bind(this)
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
  handleAllDetails(){
    const request = new Request();
    const id = this.state.loggedInCustomer.id
    console.log(id);
    request.get('/api/customers/'+ id)
    .then((data)=>{

      this.setState({loggedInCustomer: data})
    })

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
    this.setState({filterIsOn: false, filteredSneakers: []});
    let filterBoxes = document.getElementsByClassName('filter-select');
    for (let i=0; i<filterBoxes.length; i++) {
      filterBoxes[i].selectedIndex = 0
    }
    // window.location = "/"
    return <Redirect  to="/" />
  }



  handleLoginNameChange(even){

    this.setState({loginName: even})

    }
    handleLoginCustomer(even){


    this.setState({loggedInCustomer: even})

  }

  findAllSneakersByDeparment(department) {

    const filteredSneakersByDepartment = this.state.sneakers.filter((sneaker) => {
      return sneaker.department == department
    })


    this.setState({filteredSneakers: filteredSneakersByDepartment, filterIsOn: true});

  }


  handleDepartmentClicked(event) {
    this.findAllSneakersByDeparment("male");
  }

  handleDepartmentClickedWomen(event) {
    this.findAllSneakersByDeparment("women");
  }

  handleDepartmentClickedChildren(event) {
    this.findAllSneakersByDeparment("children");
  }

  handleDepartmentClickedAll(event) {
    this.setState({filteredSneakers: [], filterIsOn: false})
  }


  handleAddToBasket(event) {

    // const sneakerOriginalState = this.findSneakerById(event.target.value);
    const sneakerFound = this.findSneakerById(event.target.value);

    this.setState({basket: [...this.state.basket, sneakerFound]});

  }


  // -------------------------------------------------------------------------
  handlePurchase(event) {

    // a list of items
    // customer object
    var dateString = new Date().toISOString().substring(0,10);
    const orderToPost = {
      date: dateString,
      isCompleted: "yes",
      customer: this.state.loggedInCustomer,
      sneakers: this.state.basket
    }


    const request = new Request();
    const orderPromise = request.post("/api/orders", orderToPost)
    .then((data) => {
      const returningObject = data.json()
      const newArray = this.state.orders.map(a => Object.assign({}, a));
      newArray.push(returningObject)
      this.setState({

        orders: newArray
      })

      const email =  {
        "name": "Turbo",
        "email": "fakeShop@gmail.com",
        "feedback": "This is your email confirmation. Your purchase is completed."
      }

      request.post('/api/feedback', email)


      this.setState({
        basket: []
      })
    })

  }

  render(){

    return(

      <Router>

      <Fragment>

      <NavBar name={this.state.loginName}
      menDepartmentClicked={this.handleDepartmentClicked}
      womenDepartmentClicked={this.handleDepartmentClickedWomen}
      kidDepartmentClicked={this.handleDepartmentClickedChildren}
      allSneakersClicked={this.handleDepartmentClickedAll}
      customer={this.state.loggedInCustomer}
      handleAllDetails={this.handleAllDetails}
      />

      <Filter
      sneakers={this.state.sneakers} onFilterChangeBrand={this.handleFilterChangeBrand}
      onFilterChangeModel={this.handleFilterChangeModel}
      onFilterChangeSize={this.handleFilterChangeSize}
      onClearFilter={this.handleClearFilter}
      filter={this.state.filterIsOn}
      filteredSneakers={this.state.filteredSneakers}/>


      <Switch>

        <Route path='/sneakers/:id' render = {(props) =>
          {
            const id = props.match.params.id;
            const sneaker = this.findSneakerById(id)
            return <SneakerDetail sneaker = {sneaker} addToBasket={this.handleAddToBasket}/>
          }}/>


        <Route path="/login" render={(props)=>{

          return(
            this.state.loggedInCustomer ? (<Redirect  to="/" />) : <LoginForm onLogin={this.handleLoginNameChange} onLoginCustomer={this.handleLoginCustomer} />
          )

        }}/>


        <Route path="/basket" render={(props) => {
          // customer
          // array of items - basket
          // handle purchase
          return <Basket
          customer={this.state.loggedInCustomer}
          basket={this.state.basket}
          handlePurchase={this.handlePurchase}
          />
        }} />

        <Route path="/mydetails" render={(props)=>{
          return <MyDetails
          customer={this.state.loggedInCustomer}

          />
        }}/>

<<<<<<< HEAD
          <Route path="/men" render={(props)=> {
            // from sneakers, select all the sneakers that have men department,
            // and set the state of FilteredSneakers, and the filter to On.
            // const foundSneakers = this.findAllSneakersByDeparment("men");
            return <SneakerList
            sneakers = {this.state.sneakers}
            filteredSneakers = {this.state.filteredSneakers}
            filterIsOn = {this.state.filterIsOn}
            />
=======




        <Route path="/men" render={(props)=> {
          // from sneakers, select all the sneakers that have men department,
          // and set the state of FilteredSneakers, and the filter to On.
          // const foundSneakers = this.findAllSneakersByDeparment("men");
          return <SneakerList
          sneakers = {this.state.sneakers}
          filteredSneakers = {this.state.filteredSneakers}
          filterIsOn = {this.state.filterIsOn}
          />
>>>>>>> feature/adding_functionality

        }} />

        <Route path="/women" render={(props) => {
          return <SneakerList
          sneakers = {this.state.sneakers}
          filteredSneakers = {this.state.filteredSneakers}
          filterIsOn = {this.state.filterIsOn}
          />
        }} />


        <Route path="/kids" render={(props) => {
          return <SneakerList
          sneakers = {this.state.sneakers}
          filteredSneakers = {this.state.filteredSneakers}
          filterIsOn = {this.state.filterIsOn}
          />
        }} />


        <Route path='/' render = {(props) => {
          // all sneakers
          return <SneakerList
          sneakers = {this.state.sneakers}
          filteredSneakers = {this.state.filteredSneakers}
          filterIsOn = {this.state.filterIsOn}
          />
        }} />

          </Switch>

          <footer className="footer">
            <h1>Its me the footer</h1>
          </footer>

<<<<<<< HEAD
          </Fragment>
          </Router>
        )
      }
=======
        </Switch>
        </Fragment>
        </Router>
      )
>>>>>>> feature/adding_functionality
    }
  }







  export default ShopContainer;
