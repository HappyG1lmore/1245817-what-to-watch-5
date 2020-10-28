import React from "react";
import ReactDom from "react-dom";
import {createStore} from "redux";
import {Provider} from "react-redux";
import {reducer} from "./reducer";
import App from "./components/app/app";

import {generateFilm} from "./mocks/films";

const FILMS_COUNT = 8;
const filmsList = new Array(FILMS_COUNT).fill().map((item, index) => {
  return generateFilm(index);
});

const movie1 = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

export const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f
);

ReactDom.render(
    <Provider store={store}>
      <App mainFilm={movie1} filmsList={filmsList}/>,
    </Provider>,
    document.querySelector(`#root`)
);

