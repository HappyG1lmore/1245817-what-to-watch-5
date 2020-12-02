import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Main} from './main';
import {films, genres, noop} from '../../test-data';

const renderer = new ShallowRenderer();

test(`Main renders correctly`, () => {
  renderer.render(
      <Main
        filteredFilms={films}
        filmsGenres={genres}
        history={{push: noop}}
        mainFilm={films[1]}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
