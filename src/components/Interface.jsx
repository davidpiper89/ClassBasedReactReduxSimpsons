import React, { Component } from "react";
import { connect } from "react-redux";
import Characters from "./Characters";
import {
  ADD_CHARACTER,
  SET_USER_INPUT,
  SET_SEARCH_INPUT,
} from "../redux/types";
import Sort from "./Sort";

class Interface extends Component {
  render() {
    let count = 0;
    this.props.simpsons.forEach((simpson) => {
      if (simpson.liked) {
        count++;
      }
    });

    return (
      <>
        <h1>Simpsons quotes</h1>
        <p>Total No. of Likes: {count} </p>
        <h2
          onInput={(e) => {
            this.props.dispatch({
              type: SET_USER_INPUT,
              payload: { name: e.target.name, value: e.target.value },
            });
          }}
        >
          Add Character:
          <input type="text" name="newCharacterInput" />
          and quote:
          <input type="text" name="newQuoteInput" />
          <button
            onClick={() => {
              this.props.dispatch({ type: ADD_CHARACTER });
            }}
          >
            Add
          </button>
        </h2>
        <div
          onInput={(e) => {
            this.props.dispatch({
              type: SET_SEARCH_INPUT,
              payload: { name: e.target.name, value: e.target.value },
            });
          }}
        >
          <h2>
            Search
            <input type="text" name="search"></input>
          </h2>
        </div>
        <Sort />

        <Characters />
      </>
    );
  }
}
function mapStateToProps(state) {
  return { simpsons: state.simpsons };
}
export default connect(mapStateToProps)(Interface);
