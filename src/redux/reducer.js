import { initialState } from "../redux/initialState";
import { SET_SIMPSONS_API } from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SIMPSONS_API:
      return { ...state, simpsons: action.payload };

    // case "SORT_BY_NAME":
    //   return {...state, simpsons: simpsons.sort()}

    default:
      console.log("new store or invalid type");
      return state;
  }
}
