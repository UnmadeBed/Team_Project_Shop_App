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
        <Sneaker sneaker = {this.props.sneaker} />
        <button>
        Purchase
        </button>
      </div>
    )
  }
}

export default SneakerDetail;
