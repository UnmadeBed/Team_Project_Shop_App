import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class SizeSelect extends Component {
  constructor(props) {
    super(props);


    this.state = {
      sizeSelected: null
    }

    this.handleSizeChange = this.handleSizeChange.bind(this);

}

handleSizeChange(event) {
  this.props.onSizeSelect(event.target.value)
}

render() {

  const uniqueSizes = [...new Set(this.props.sneakers.map(sneaker => sneaker.size))];

  const sizeOptions = uniqueSizes.map((size,index) => {
      return(
         <option key={index} value={size}>{size}</option>
      )
  })

  let sizeOptionsFiltered = [];
  if (this.props.filterStatus) {

    const uniqueSizesFiltered = [...new Set(this.props.filteredSneakers.map(sneaker => sneaker.size))];

    sizeOptionsFiltered = uniqueSizesFiltered.map((size,index) => {
        return(
           <option key={index} value={size}>{size}</option>
        )
    })
  }



  return(
    <div>
        <select className="filter-select" name="size" onChange={this.handleSizeChange} defaultValue="select-size">
          <option disabled value="select-size">Available sizes</option>
          {this.props.filterStatus ? sizeOptionsFiltered : sizeOptions}
        </select>
    </div>
  )
}
}

export default SizeSelect;
