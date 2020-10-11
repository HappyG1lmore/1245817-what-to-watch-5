import React from "react";
import ReactDom from "react-dom";
import App from "./components/app/app";

const movie1 = {
  title: `The Grand Budapest Hotel`,
  genre: `Drama`,
  year: `2014`
};

ReactDom.render(
    <App mainFilm={movie1} />,
    document.querySelector(`#root`)
);

