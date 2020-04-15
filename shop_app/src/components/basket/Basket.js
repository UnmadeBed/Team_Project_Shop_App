import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';




class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = {
      price:0
    }

this.handleClean =this.handleClean.bind(this)

  }


handleClean(){
  this.setState({
    price: 0
  })
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

    function handleToken(token, addresses) {
      console.log({token, addresses});
    }

    const price = 0
    const item = this.props.basket.map((sneaker) => {
      return this.state.price += sneaker.retailPrice
    })
    console.log(this.state.price);
    return(

      <Fragment>
        <button onClick={this.props.handlePurchase}>Buy Now</button>
        {itemNodes}
        <button onClick={this.props.handlePurchase}>
        <StripeCheckout
          stripeKey="pk_test_E2FAuOZosm0GMANWGyZ6QiIN00ztQJoxNN"
          token={handleToken}
          billingAddress
          shippingAddress
          amount={this.state.price * 100}
          onClick={this.props.handlePurchase}
          onClick={this.handleClean}
        />
        </button>
      </Fragment>

    )
  }

}




export default Basket;
