import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {LikeThis} from './like-this';
import {genres, films} from '../../test-data';

const renderer = new ShallowRenderer();
test(`LikeThis renders correctly`, () => {
  renderer.render(
      <LikeThis
        genre={genres[1]}
        filmsList={films}
        id={2}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
