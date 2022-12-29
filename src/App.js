import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { connect } from "react-redux";
// import { SET_SIMPSONS_API } from "./redux/types";
import Interface from "./components/Interface";

class App extends Component {
  state = {};

  async componentDidMount() {
    const { data } = await axios.get(
      `https://thesimpsonsquoteapi.glitch.me/quotes?count=10`
    );;
    // this.props.dispatch({ type: SET_SIMPSONS_API, payload: result.data });
    this.setState({ data });
  }

  // onDelete = () => {
  //   const copy = { ...this.state };
  //   copy.splice(0, 1);
  //   this.setState({ ...copy });
  // };

  //   addCharacter = () => {
  //     const indexOf = this.state.listQuotes.data.findIndex(
  //       (item) => item.quote === this.state.quote
  //     );

  //     if (indexOf > -1) {
  //       return;
  //     }

  //     const copy = { ...this.state };
  //     copy.listQuotes.data.unshift({
  //       quote: this.state.quote,
  //       character: this.state.character,
  //       image: "",
  //       characerDirection: "Left",
  //     });
  //     this.setState({ ...copy, character: "", quote: "" });
  //   };

  //   addLiked = (quote) => {
  //     const indexOf = this.state.listQuotes.data.findIndex(
  //       (index) => index.quote === quote
  //     );

  //     const copy = { ...this.state };
  //     copy.listQuotes.data[indexOf].liked = !copy.listQuotes.data[indexOf].liked;
  //     this.setState({ ...copy });
  //   };

  //   removeCharacter = (quote) => {
  //     const indexOf = this.state.listQuotes.data.findIndex((item) => {
  //       return item.quote === quote;
  //     });
  //     const copy = { ...this.state };
  //     copy.listQuotes.data.splice(indexOf, 1);
  //     this.setState({ ...copy });
  //   };

  //   onChange = (e) => {
  //     this.setState({ [e.target.name]: e.target.value });
  //   };

  render() {
    const characters = this.state.data;
    if (!characters) return <p>loading</p>;
    return <>{<Interface characters={characters} />}</>;
    
  }
}
//     if (this.state.listQuotes) {
//       let { data } = this.state.listQuotes;

//       let total = 0;
//       data.forEach((item) => {
//         if (item.liked) total += 1;
//       });

//       if (this.state.search) {
//         data = data.filter((item) => {
//           return item.character
//             .toLowerCase()
//             .includes(this.state.search.toLowerCase().trim());
//         });
//       }

//       // if (this.state.sort === "charAsc") {
//       //   data = data.filter((item) => {
//       //     return item.character.sort();
//       //   });
//       // } else if (this.state.sort === "charDsc") {
//       //   data = data.filter((item) => {
//       //     return item.character.sort().reverse();
//       //   });
//       // } else if (this.state.sort === "quoteAsc") {
//       //   data = data.filter((item) => {
//       //     return item.quote.sort();
//       //   });
//       // } else if (this.state.sort === "quoteDsc") {
//       //   data = data.filter((item) => {
//       //     return item.quote.sort().reverse();
//       //   });
//       // }

//       return (
//         <>
//           <h1>Simpsons quotes</h1>
//           <p>Total No. of Likes: {total}</p>
//           <h2 onInput={this.onInput}>
//             Add Character:
//             <input
//               value={this.state.character}
//               type="text"
//               name="character"
//             ></input>
//             and quote:
//             <input value={this.state.quote} type="text" name="quote"></input>
//             <button onClick={this.addCharacter}>Add</button>
//           </h2>

//           <h2 onInput={this.onInput}>
//             Search: <input type="text" name="search"></input>
//           </h2>
//           <Sort onChange={this.onChange} />
//           <Quotes
//             removeCharacter={this.removeCharacter}
//             data={data}
//             addLiked={this.addLiked}
//           />
//         </>
//       );
//     }
//     return <h1> Loading </h1>;
//   }
// }

export default App;
