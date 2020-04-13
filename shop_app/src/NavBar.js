import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import { Link } from "react-router-dom";




class NavBar extends Component {
    constructor(props) {
      super(props);


      this.handleClickMen = this.handleClickMen.bind(this);
      this.handleClickWomen = this.handleClickWomen.bind(this);
      this.handleClickKids = this.handleClickKids.bind(this);
      this.handleClickAllSneakers = this.handleClickAllSneakers.bind(this);
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


    render() {
      return(
        <header className="NavBar">
          <ul>
            <li className="navLink" onClick={this.handleClickAllSneakers}>
              <Link to="/sneakers">All Sneakers</Link>
            </li>

            <li className="navLink" onClick={this.handleClickMen}>
              <Link to="/men">Men</Link>
            </li>

            <li className="navLink" onClick={this.handleClickWomen}>
              <Link to="/women">Women</Link>
            </li>
            <li className="navLink" onClick={this.handleClickKids}>
              <Link to="/kids">Kids</Link>
            </li>
            <li className="navLink">
              <Link to="/newreleases">New Releases</Link>
            </li>
            <li className="navLink">
              <Link to="/sale">Sale</Link>
            </li>
            <li className="navLink">
              <Link to="/login">{this.props.name}</Link>
            </li>

            <li className="navLink">
              <Link to="/basket">Basket</Link>
            </li>

          </ul>

        </header>
      )
    }


}





export default NavBar;
