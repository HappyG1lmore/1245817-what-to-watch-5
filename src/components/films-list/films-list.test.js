import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import FilmsList from './films-list';
import {films} from '../../test-data';

const renderer = new ShallowRenderer();

test(`FilmsList renders correctly`, () => {
  renderer.render(
      <FilmsList
        filmsList={films}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
