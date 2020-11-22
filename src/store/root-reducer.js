import {combineReducers} from "redux";
import {reducer as films} from "./films/reducer";
import {reducer as users} from "./users/reducer";

export default combineReducers({
  films,
  users,
});


