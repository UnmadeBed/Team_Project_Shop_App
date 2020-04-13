import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';



class ModelSelect extends Component {
  constructor(props) {
    super(props);



    this.state = {
      modelSelected: null
    }

    this.handleModelChange = this.handleModelChange.bind(this);
  }


  handleModelChange(event) {
    this.props.onModelSelect(event.target.value);
  }



  render() {

    const uniqueModels = [...new Set(this.props.sneakers.map(sneaker => sneaker.model))];
    console.log("unique models are as follows:");
    console.log(uniqueModels);

    const modelOptions = uniqueModels.map((model,index) => {
        return(
           <option key={index} value={model}>{model}</option>
        )
    })

    let modelOptionsFiltered = [];
    if (this.props.filterStatus) {

      const uniqueBrandsFiltered = [...new Set(this.props.filteredSneakers.map(sneaker => sneaker.model))];

      modelOptionsFiltered = uniqueBrandsFiltered.map((model,index) => {
          return(
             <option key={index} value={model}>{model}</option>
          )
      })
    }


    return(

      <div>
          <select className="filter-select" name="model" onChange={this.handleModelChange} defaultValue="select-model">
            <option disabled value="select-model">Select a model</option>
            {this.props.filterStatus ? modelOptionsFiltered : modelOptions}
          </select>
      </div>
    )
  }
}

export default ModelSelect;
