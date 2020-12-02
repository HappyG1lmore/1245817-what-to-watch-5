import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {AddReview} from './add-review';
import {films} from '../../test-data';

const renderer = new ShallowRenderer();

test(`AddReview renders correctly`, () => {
  renderer.render(
      <AddReview
        filmsList={films}
        match={{params: {id: `2`}}}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
