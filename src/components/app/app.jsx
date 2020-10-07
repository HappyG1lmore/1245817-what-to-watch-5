import React from "react";
import Main from "./../main/main";
import PropTypes from "prop-types";

const App = (props) => {
  const mainFilm = props.mainFilm;
  return (
    <Main
      mainFilm={mainFilm}
    />
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
