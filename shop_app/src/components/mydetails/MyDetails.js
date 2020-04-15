import React, {Component} from 'react';


class MyDetails extends Component{
  constructor(props) {
    super(props);
  }



  render(){

    const orders = this.props.customer.orders


    return(

      <div className="details-box">
      {
        Object.keys(orders).map(order_id => {
          return (
            <div>

            <div>
             <h3>Order id: {order_id}</h3>
            </div>

            {
              orders[order_id].sneakers.map(sneaker => {
                return(
                  <div className="myDetailsSneakers">

                  <img src={sneaker.imgLink} width="100" height="100"/>
                  </div>
                )
              })
            }
            </div>
          )
        })
      }
      </div>
    )
  }


}


export default MyDetails;
/*  <p>{sneaker.brand}</p>
  <p>{sneaker.retailPrice}</p>*/
