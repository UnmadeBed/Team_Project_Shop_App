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

  // if (props.sneakers.length === 0) {
  //   return (<p>Loading...</p>)
  //
  // }
  // const sneakers = props.sneakers.map((sneaker, index) => {
  //   return (
  //     <li key = {index} className="component-item">
  //     <div className="component">
  //       <Sneaker sneaker = {sneaker}/>
  //     </div>
  //     </li>
  //   )
  // })
  return (
    <ul className="component-list">
    {props.filterIsOn ? filteredItems : allItems}
    </ul>
  )
}

export default SneakerList;
