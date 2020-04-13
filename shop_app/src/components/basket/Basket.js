import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';




class Basket extends Component {
  constructor(props) {
    super(props);



  }

  render() {
    // render a list of selected items from basket array
    // each will have a small photo, name model and price

    const itemNodes = this.props.basket.map((sneaker, index) => {
      return(
        <li>
          <img src={sneaker.imgLink} width="250" height="250"/>
          <h5>{sneaker.brand}</h5>
          <h5>{sneaker.model}</h5>
          <h5>{sneaker.size}</h5>
          <h5>£{sneaker.retailPrice}</h5>
        </li>
      )
    })

    return(
      <Fragment>
        <button onClick={this.props.handlePurchase}>Buy Now</button>
        {itemNodes}
      </Fragment>

    )
  }

}




export default Basket;
