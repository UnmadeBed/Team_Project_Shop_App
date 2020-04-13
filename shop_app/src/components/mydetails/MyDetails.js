import React, {Component} from 'react';



class MyDetails extends Component{
  constructor(props) {
    super(props);
  }


  render(){
  /*  const customer = this.props.customer
    const orders = customer.orders.map((order, index)=>{
      return(
        <li>
        <h2>{order.id}</h2>
        <h2>{order.date}</h2>
        <img src={order.imgLink}/>
        </li>
      )
    })*/

    return(
      <p>This is My Details </p>
    )
  }







}


export default MyDetails;
