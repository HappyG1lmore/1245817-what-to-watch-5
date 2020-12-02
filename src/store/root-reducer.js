import {combineReducers} from "redux";
import {reducer as films} from "./films/reducer";
import {reducer as users} from "./users/reducer";
import {reducer as film} from "./film/reducer";
import {reducer as reviews} from "./reviews/reducer";
import {reducer as userReview} from "./userReview/reducer";
import {reducer as favoriteFilms} from "./favorite-films/reducer";
import {reducer as app} from "./app/reducer";

export default combineReducers({
  films,
  users,
  film,
  reviews,
  userReview,
  favoriteFilms,
  app
});


