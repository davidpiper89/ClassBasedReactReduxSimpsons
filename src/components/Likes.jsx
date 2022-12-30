import React, { Component } from "react";
import { connect } from "react-redux";
import { SET_LIKED_CHARACTER } from "../redux/types";

class Likes extends Component {
  render() {
    return (
      <h2>
        <button
          onClick={() =>
            this.props.dispatch({
              type: SET_LIKED_CHARACTER,
              payload: this.props.simpson.quote,
            })
          }
        >
          {!this.props.simpson.liked ? "Like?" : "Liked"}
        </button>
      </h2>
    );
  }
}

export default connect()(Likes);
