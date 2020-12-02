import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import Footer from './footer';

const renderer = new ShallowRenderer();

test(`Footer renders correctly`, () => {
  renderer.render(
      <Footer />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
