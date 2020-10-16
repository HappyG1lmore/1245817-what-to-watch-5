import React from "react";
import PropTypes from "prop-types";
import {propTypesFilmsList} from "../../prop-types";
import Main from "./../main/main";
import SignIn from "./../sign-in/sign-in";
import MyList from "./../my-list/my-list";
import Film from "./../film/film";
import AddReview from "./../add-review/add-review";
import Player from "./../player/player";

import {Switch, Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  const {mainFilm, filmsList} = props;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/"
          render = { () => (
            <Main mainFilm={mainFilm} filmsList={filmsList}/>
          )}
        />
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist"
          render = { () => (
            <MyList filmsList={filmsList}/>
          )}
        />
        <Route exact path="/films/:id?"
          render = { (routProps) => (
            <Film routProps={routProps} filmsList={filmsList}/>
          )}
        />
        <Route exact path="/player/:id?">
          <Player />
        </Route>
        <Route exact path="/films/:id/review" component={AddReview} />
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mainFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string
  }),
  filmsList: propTypesFilmsList
};

export default App;
