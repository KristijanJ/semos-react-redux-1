import { combineReducers } from 'redux';
import sayHelloReducer from "./sayHelloReducer";
import moviesReducer from "./moviesReducer";

export default combineReducers({
  sayHelloReducer,
  moviesReducer
});