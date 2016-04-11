import { FETCH_WEATHER } from '../actions/index';
export default function( state = [], action) {
  switch(action.type){
  case FETCH_WEATHER:

    // remember:  don't mutate state... but can append values?
    // es5 version
    // return state.concat([action.payload.data]);

    // es6 version
    return [action.payload.data, ...state];
  }
  return state;
}
