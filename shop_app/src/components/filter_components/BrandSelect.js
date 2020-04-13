import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

class BrandSelect extends Component {
  constructor(props) {
    super(props);


    this.state = {
      brandSelected: null
    }

    this.handleBrandChange = this.handleBrandChange.bind(this);
  }

  handleBrandChange(event) {
    this.setState({brandSelected: event.target.value});
    this.props.onBrandSelect(event.target.value);
  }




  render() {


    const uniqueBrands = [...new Set(this.props.sneakers.map(sneaker => sneaker.brand))];

    const brandOptions = uniqueBrands.map((brand,index) => {
        return(
           <option key={index} value={brand}>{brand}</option>
        )
    })


    let brandOptionsFiltered = [];
    if (this.props.filterStatus) {

      const uniqueBrandsFiltered = [...new Set(this.props.filteredSneakers.map(sneaker => sneaker.brand))];

      brandOptionsFiltered = uniqueBrandsFiltered.map((brand,index) => {
          return(
             <option key={index} value={brand}>{brand}</option>
          )
      })
    }

    return(
      <div>
          <select className="filter-select" name="brand" onChange={this.handleBrandChange} defaultValue="select-brand">
            <option disabled value="select-brand">Select a brand</option>
            {this.props.filterStatus ? brandOptionsFiltered : brandOptions}
          </select>
      </div>
    )
  }


}

export default BrandSelect;
