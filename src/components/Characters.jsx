import React, { Component } from "react";
import Quote from "./Quote";
import Image from "./Image";
import Name from "./Name";
import Likes from "./Likes";
import { connect } from "react-redux";
import { REMOVE_CHARACTER } from "../redux/types";

class Characters extends Component {
  render() {
    let copy = this.props.simpsons;

    switch (this.props.sort) {
      case "1":
        copy.sort((a, b) => {
          if (a.character > b.character) return 1;
          if (a.character < b.character) return -1;
          return 0;
        });
        break;
      case "2":
        copy.sort((a, b) => {
          if (a.character < b.character) return 1;
          if (a.character > b.character) return -1;
          return 0;
        });
        break;
      case "3":
        copy.sort((a, b) => {
          if (a.quote > b.quote) return 1;
          if (a.quote < b.quote) return -1;
          return 0;
        });
        break;
      case "4":
        copy.sort((a, b) => {
          if (a.quote < b.quote) return 1;
          if (a.quote > b.quote) return -1;
          return 0;
        });
        break;

      default:
        break;
    }

    return copy.map((simpson) => {
      return (
        <div key={simpson.quote} className="quote">
          <div>
            <Name simpson={simpson} />
          </div>
          <div>
            <Image simpson={simpson} />
          </div>
          <div>
            <Quote simpson={simpson} />
          </div>
          <h2>
            <button
              onClick={() =>
                this.props.dispatch({
                  type: REMOVE_CHARACTER,
                  payload: simpson.quote,
                })
              }
            >
              Remove
            </button>
          </h2>
          <Likes simpson={simpson} key={simpson.quote} />
        </div>
      );
    });
  }
}

function mapStateToProps(state) {
  return { simpsons: state.simpsons, sort: state.sort };
}
export default connect(mapStateToProps)(Characters);
