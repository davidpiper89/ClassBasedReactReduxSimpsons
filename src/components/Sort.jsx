import React, { Component } from "react";
import { SORT_INPUT } from "../redux/types";
import { connect } from "react-redux";

class Sort extends Component {
  state = {
    options: [
      { id: 0, name: "Select..." },
      { id: 1, name: "Character Ascending" },
      { id: 2, name: "Character Descending" },
      { id: 3, name: "Quote Ascending" },
      { id: 4, name: "Quote Descending" },
    ],
  };

  render() {
    return (
      <label>
        Sort By..
        <select
          name="sort"
          onInput={(e) => {
            this.props.dispatch({
              type: SORT_INPUT,
              payload: { name: e.target.name, value: e.target.value },
            });
          }}
        >
          {this.state.options.map((option) => (
            <option key={option.id} value={option.id}>
              {option.name}{" "}
            </option>
          ))}
        </select>
      </label>
    );
  }
}

export default connect()(Sort);
