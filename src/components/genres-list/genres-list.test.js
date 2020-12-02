import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {GenresList} from './genres-list';
import {genres, noop} from '../../test-data';

const renderer = new ShallowRenderer();

test(`GenresList renders correctly`, () => {
  renderer.render(
      <GenresList
        genre={genres[1]}
        filmGenres={genres}
        changeFilterGenreAction={noop}
        filterFilmsByGenreAction={noop}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
