import React, {Component} from 'react';



class MyDetails extends Component{
  constructor(props) {
    super(props);
  }


  render(){
  if(this.props.customer){
    const orders = this.props.customer.orders.sneakers.map((order, index)=>{

      return(

        <li>
        <h2>{order.id}</h2>
        <h2>{order.date}</h2>
        <img src={order.imgLink}/>
        </li>
      )
    })
  }

    return(
      <div>
      <p>This is My Details </p>

      </div>
    )
  }







}


export default MyDetails;
