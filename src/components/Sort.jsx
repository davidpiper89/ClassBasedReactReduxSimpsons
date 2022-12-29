import React, { Component } from "react";

class Sort extends Component {

state = {};



  render() {
    
    return (
        <label>
          Sort By..
      <select name = "sort" onChange={this.props.onChange}>
        <option value="" disabled selected hidden>Select..</option>
        <option value="charAsc">Character Ascending</option>        
        <option value="charDsc">Character Descending</option>
        <option value="quoteAsc">Quote Ascending</option>
        <option value="quoteDsc">Quote Descending</option>
      </select>
      </label>
    
      
    );
  }
}


export default Sort;
