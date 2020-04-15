import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

const Sneaker = (props) => {
  if (!props.sneaker) {
    return "Loading..."
  }

  const url = '/sneakers/' + props.sneaker.id

  return (
    <div className="sneaker-item">

      <div className="sneaker-img-wrapper">
      <img className="sneaker-img" src={props.sneaker.imgLink} alt="image" width="200" height="200"/>
      </div>

      <h3 className="sneaker-item-text-primary"> {props.sneaker.brand}</h3>
      <h5 className="sneaker-item-text-primary"> {props.sneaker.model}</h5>


      <h5 className="sneaker-item-text-secondary">Size: {props.sneaker.size}</h5>
      <h5 className="sneaker-item-text-secondary">Price: £{props.sneaker.retailPrice}</h5>


      <Link to={url}>
        <img className="info-button" src="https://img.icons8.com/ios-filled/64/000000/info.png"/>
      </Link>

    </div>
  )

}



export default Sneaker;
