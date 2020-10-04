import React from "react";
import Main from "./../main/main";
import PropTypes from "prop-types";

const App = (props) => {

  const [movie] = props.films;
  return (
    <Main
      movie={movie}
    />
  );
};

App.propTypes = {
  films:
  PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        genre: PropTypes.string,
        year: PropTypes.string
      })
  ).isRequired
};

export default App;
