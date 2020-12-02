import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {ReviewForm} from './review-form';
import {noop} from '../../test-data';

const renderer = new ShallowRenderer();

test(`ReviewForm renders correctly`, () => {
  renderer.render(
      <ReviewForm
        comment={`Some test review`}
        rating={`3`}
        isUploading={false}
        onHandleSubmit={noop}
        onFieldChange={noop}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
