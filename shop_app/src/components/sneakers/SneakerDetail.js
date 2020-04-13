import React, { Component }from 'react';
import Sneaker from './sneaker';
import {Link} from 'react-router-dom';

class SneakerDetail extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    if (!this.props.sneaker) {
      return "Loading..."
    }
    return (
      <div className='component'>

        <img src={this.props.sneaker.imgLink} alt="image" width="350" height="350"/>

        <div>
          <h3>Brand: {this.props.sneaker.brand}</h3>
          <h3>Model: {this.props.sneaker.model}</h3>
          <h3>Size: {this.props.sneaker.size}</h3>
          <h3>Price: £{this.props.sneaker.retailPrice}</h3>
        </div>

        <button value={this.props.sneaker.id} onClick={this.props.addToBasket}>
        Add to basket
        </button>
      </div>
    )
  }
}

export default SneakerDetail;
// <Sneaker sneaker = {this.props.sneaker} />
