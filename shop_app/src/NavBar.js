import React from 'react';
import { Link } from "react-router-dom";


const NavBar = (props) =>{

  return (
    <header className="NavBar">
      <ul>
        <li className="navLink">
          <Link to="/sneakers">All Sneakers</Link>
        </li>
        <li className="navLink">
          <Link to="/men">Men</Link>
        </li>
        <li className="navLink">
          <Link to="/women">Women</Link>
        </li>
        <li className="navLink">
          <Link to="/kids">Kids</Link>
        </li>
        <li className="navLink">
          <Link to="/newreleases">New Releases</Link>
        </li>
        <li className="navLink">
          <Link to="/sale">Sale</Link>
        </li>
        <li className="navLink">
          <Link to="/login">{props.name}</Link>
        </li>
      </ul>
    </header>
  )

}


export default NavBar;
