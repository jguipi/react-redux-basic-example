import { INCREMENT_COUNTER, REDUCE_COUNTER } from "./counterDataConst";

const INITIAL_STATE = {
  counter: 0
};

function counterDataReducers(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_COUNTER:
      return {
        ...state,
        counter: state.counter + 1
      };
    case REDUCE_COUNTER:
      return {
        ...state,
        counter: state.counter - 1
      };
    default:
      return state;
  }
}

export default counterDataReducers;
