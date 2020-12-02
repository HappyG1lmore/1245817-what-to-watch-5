import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {SmallMovieCard} from './small-movie-card';
import {films, noop} from '../../test-data';

const renderer = new ShallowRenderer();

test(`SmallMovieCard renders correctly`, () => {
  renderer.render(
      <SmallMovieCard
        film={films[2]}
        handleMouseEnter={noop}
        handleMouseLeave={noop}
        playPreview={false}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
