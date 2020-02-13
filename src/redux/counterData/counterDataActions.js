import { INCREMENT_COUNTER, REDUCE_COUNTER } from "./counterDataConst";

export function incrementCounter() {
  return {
    type: INCREMENT_COUNTER
  };
}

export function reduceCounter() {
  return {
    type: REDUCE_COUNTER
  };
}
