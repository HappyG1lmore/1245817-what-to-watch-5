import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {ReviewsTab} from './reviews-tab';
import {reviews} from '../../test-data';

const renderer = new ShallowRenderer();

describe(`ReviewsTab renders correctly`, () => {
  it(`When film has reviews`, () => {
    renderer.render(<ReviewsTab comments={reviews}/>);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`When film has no reviews`, () => {
    renderer.render(<ReviewsTab comments={[]}/>);
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
