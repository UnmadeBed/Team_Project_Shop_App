import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Sneaker = (props) => {
  if (!props.sneaker) {
    return "Loading..."
  }

  const url = '/sneakers/' + props.sneaker.id

  return (
    <div className="sneaker-item">
      <img src={props.sneaker.imgLink} alt="image" width="150" height="150"/>
      <h3>Brand: {props.sneaker.brand}</h3>
      <h5>Model: {props.sneaker.model}</h5>
      <h5>Size: {props.sneaker.size}</h5>
      <h5>Price: £{props.sneaker.retailPrice}</h5>
      <Link to={url}>Details</Link>
    </div>
  )

}



export default Sneaker;
