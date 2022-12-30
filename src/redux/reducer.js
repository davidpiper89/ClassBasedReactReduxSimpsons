import { initialState } from "../redux/initialState";
import {
  SET_SIMPSONS_API,
  REMOVE_CHARACTER,
  SET_LIKED_CHARACTER,
  SET_USER_INPUT,
  ADD_CHARACTER,
  SET_SCREEN_MODE,
  SET_SEARCH_INPUT,
  SORT_INPUT,
} from "./types";

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_SIMPSONS_API:
      return { ...state, simpsons: action.payload };

    case REMOVE_CHARACTER: {
      const indexOf = state.simpsons.findIndex((simpson) => {
        return simpson.quote === action.payload;
      });

      const simpsons = [...state.simpsons];
      simpsons.splice(indexOf, 1);
      return { ...state, simpsons };
    }
    case SET_LIKED_CHARACTER: {
      const indexOf = state.simpsons.findIndex((item) => {
        return item.quote === action.payload;
      });
      const simpsons = [...state.simpsons];

      simpsons[indexOf].liked = !simpsons[indexOf].liked;
      return { ...state, simpsons };
    }
    case SET_SEARCH_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };

    case SET_USER_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };

    case ADD_CHARACTER: {
      const simpsons = [ ...state.simpsons ];
      simpsons.push({
        quote: state.newQuoteInput,
        character: state.newCharacterInput,
        image: "",
        characterDirection: "Right",
      });
      return { ...state, simpsons };
    }
    case SET_SCREEN_MODE: {
      return { ...state, screenMode: action.payload };
    }

    case SORT_INPUT:
      return { ...state, [action.payload.name]: action.payload.value };

    default:
      console.log("new store or invalid type");
      return state;
  }
}
