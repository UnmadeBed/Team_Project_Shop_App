import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import { Link } from "react-router-dom";

import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';


class NavBar extends Component {
    constructor(props) {
      super(props);





      this.handleClickMen = this.handleClickMen.bind(this);
      this.handleClickWomen = this.handleClickWomen.bind(this);
      this.handleClickKids = this.handleClickKids.bind(this);
      this.handleClickAllSneakers = this.handleClickAllSneakers.bind(this);

      this.handleAllDetails = this.handleAllDetails.bind(this);

    }


    handleClickMen(event) {
      // console.log("HeLOoOOOOOOO")
      this.props.menDepartmentClicked(event);
    }

    handleClickWomen(event) {

      this.props.womenDepartmentClicked(event);

    }

    handleClickKids(event) {
      this.props.kidDepartmentClicked(event);
    }

    handleClickAllSneakers(event) {
      this.props.allSneakersClicked(event);
    }

    handleAllDetails(event) {
      this.props.handleAllDetails(event)
    }


    render() {

      let mydetails = null
      if(this.props.customer){
          mydetails =
            <Nav.Link as={Link} to="/mydetails" onClick={this.handleAllDetails}>My Details</Nav.Link>

      }


      return(

        <Navbar className="navigation-bar" bg="light" expand="lg">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/sneakers" onClick={this.handleClickAllSneakers}>All Sneakers</Nav.Link>
              <Nav.Link as={Link} to="/men" onClick={this.handleClickMen}>Men</Nav.Link>
              <Nav.Link as={Link} to="/women" onClick={this.handleClickWomen}>Women</Nav.Link>
              <Nav.Link as={Link} to="/kids" onClick={this.handleClickKids}>Kids</Nav.Link>
              <Nav.Link as={Link} to="/login">{this.props.name}</Nav.Link>
              <Nav.Link as={Link} to="/basket">Shopping Cart</Nav.Link>
              {mydetails}
            </Nav>
          </Navbar.Collapse>
        </Navbar>

      )
    }
}


export default NavBar;
// <Navbar.Brand href="#home">PPK Sneakers</Navbar.Brand>
