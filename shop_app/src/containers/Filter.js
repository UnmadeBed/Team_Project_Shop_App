import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Request from "../helpers/request";
import ModelSelect from "../components/filter_components/ModelSelect";
import BrandSelect from "../components/filter_components/BrandSelect";
import SizeSelect from "../components/filter_components/SizeSelect";


class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }
    this.onBrandSelect = this.onBrandSelect.bind(this);
    this.onModelSelect = this.onModelSelect.bind(this);
    this.onSizeSelect = this.onSizeSelect.bind(this);
  }


  onBrandSelect(brandName) {

    this.props.onFilterChangeBrand(brandName);
    // call a prop function from Shop container
  }

  onModelSelect(modelName) {

    this.props.onFilterChangeModel(modelName);
  }

  onSizeSelect(size) {

    this.props.onFilterChangeSize(size);
  }


  render() {

    if (this.props.sneakers == null) {
        return(
          <p>loading data</p>
        )
    }

    return(

      <div>
        <button onClick={this.props.onClearFilter}>Clear filter</button>

      // price..?
        <BrandSelect
        filteredSneakers={this.props.filteredSneakers}
        sneakers={this.props.sneakers}
        onBrandSelect={this.onBrandSelect}
        filterStatus={this.props.filter}
        />

        <ModelSelect
         filteredSneakers={this.props.filteredSneakers}
         sneakers={this.props.sneakers}
         filterStatus={this.props.filter}
         onModelSelect={this.onModelSelect}
         />

         <SizeSelect
         filteredSneakers={this.props.filteredSneakers}
         sneakers={this.props.sneakers}
         filterStatus={this.props.filter}
         onSizeSelect={this.onSizeSelect}
         />

      </div>

    )
  }
}

export default Filter;
