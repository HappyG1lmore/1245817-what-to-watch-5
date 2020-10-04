import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";


const movie1 = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: 2014
};


const movies = [movie1];
ReactDom.render(
    <App films={movies} />,
    document.querySelector(`#root`)
);

