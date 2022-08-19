import { createStore } from "redux";

const initialState = {
  players: [],
  holders: [],
  substitutes: [] 
}

const reducer = (state = initialState, action) => {
  return state;
}

export default createStore(reducer);