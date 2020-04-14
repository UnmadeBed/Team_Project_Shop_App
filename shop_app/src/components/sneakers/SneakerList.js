import React from 'react';
import Sneaker from './sneaker';



const SneakerList = (props) => {

  const allItems = props.sneakers.map((sneaker, index) =>{
    return(
          <li key = {index} className="component-item">
          <div className="component">
            <Sneaker sneaker = {sneaker}/>
          </div>
          </li>
    )
  })


  let filteredItems = [];
  if (props.filteredSneakers.length > 0) {

    filteredItems = props.filteredSneakers.map((sneaker, index) =>{
    return(
          <li key = {index} className="component-item">
          <div className="component">
            <Sneaker sneaker = {sneaker}/>
          </div>
          </li>
    )
    })
  }


  return (
    <div>
      <ul className="sneakers-list">
      {props.filterIsOn ? filteredItems : allItems}
      </ul>
    </div>

  )
}

export default SneakerList;
