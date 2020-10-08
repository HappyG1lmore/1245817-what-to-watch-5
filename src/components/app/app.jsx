import React from "react";
import Main from "./../main/main";
import PropTypes from "prop-types";
import SignIn from "./../sign_in/sign_in";
import MyList from "./../my_list/my_list";
import Film from "./../film/film";
import AddReview from "./../add_review/add_review";
import Player from "./../player/player";


import {Switch, Route, BrowserRouter} from "react-router-dom";

const App = (props) => {
  const mainFilm = props.mainFilm;
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Main mainFilm={mainFilm} />
        </Route>
        <Route exact path="/login">
          <SignIn />
        </Route>
        <Route exact path="/mylist">
          <MyList />
        </Route>
        <Route exact path="/films/:id?">
          <Film />
        </Route>
        <Route exact path="/player/:id?">
          <Player />
        </Route>
        <Route exact path="/films/:id/review">
          <AddReview />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

App.propTypes = {
  mainFilm: PropTypes.shape({
    title: PropTypes.string,
    genre: PropTypes.string,
    year: PropTypes.string
  })
};

export default App;
