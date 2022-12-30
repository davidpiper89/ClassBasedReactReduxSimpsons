import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
import { SET_SIMPSONS_API, SET_SCREEN_MODE } from "./redux/types";
import Interface from "./components/Interface";
import Splash from "./components/Splash";

class App extends Component {
  async componentDidMount() {
    const result = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );
    this.props.dispatch({ type: SET_SIMPSONS_API, payload: result.data });

    setTimeout(() => {
      this.props.dispatch({ type: SET_SCREEN_MODE, payload: 1 });
    }, 500);
  }

  render() {
    if (this.props.screenMode === 0) {
      return <Splash />;
    }
    let characters = this.props.simpsons;

    if (!characters) return <p>loading</p>;

    if (this.props.searchInput) {
      characters = characters.filter((item) => {
        return item.character
          .toLowerCase()
          .includes(this.props.searchInput.toLowerCase().trim());
      });
    }
    return <Interface />;
  }
}

function mapStateToProps(state) {
  return {
    simpsons: state.simpsons,
    screenMode: state.screenMode,
    searchInput: state.search,
  };
}

export default connect(mapStateToProps)(App);
