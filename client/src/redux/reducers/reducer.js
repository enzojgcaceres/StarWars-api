import { SET_CHARACTERS } from '../actions/index';

const initialState = {
  characters: [],
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
      case SET_CHARACTERS:
        return {
          ...state,
          characters: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default rootReducer;