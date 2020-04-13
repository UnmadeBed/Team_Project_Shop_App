import React from 'react';
import Sneaker from './sneaker';



const SneakerList = (props) => {
  if (props.sneakers.length === 0) {
    return (<p>Loading...</p>)
  }

  const sneakers = props.sneakers.map((sneaker, index) => {
    return (
      <li key = {index} className="component-item">
      <div className="component">
        <Sneaker sneaker = {sneaker}/>
      </div>
      </li>
    )
  })
  return (
    <ul className="component-list">
    {sneakers}
    </ul>
  )
}

export default SneakerList;
