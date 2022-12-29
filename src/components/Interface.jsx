import React, { Component } from "react";
import { connect } from "react-redux";
import Characters from "./Characters";

class Interface extends Component {
  render() {

    return (
      <>
        <button onClick={this.onDelete}>Delete</button>
        <div onInput={this.props.onInput}>
          <input value={this.props.character} type="text" name="character" />
          <input value={this.props.quote} type="text" name="quote" />
          <button onClick={this.props.onAdd}>Add</button>
        </div>
        <Characters characters={this.props.characters} />
      </>
    );
  }
}
export default Interface;
