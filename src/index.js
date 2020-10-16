import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

import {generateFilm} from "./mocks/films";

const FILMS_COUNT = 8;
const filmsList = new Array(FILMS_COUNT).fill().map((item, index) => {
  return generateFilm(index);
});
console.log(filmsList);

const movie1 = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

ReactDom.render(
    <App mainFilm={movie1} filmsList={filmsList}/>,
    document.querySelector(`#root`)
);

