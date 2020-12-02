import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import ErrorScreen from './error-screen';

const renderer = new ShallowRenderer();

test(`ErrorScreen renders correctly`, () => {
  renderer.render(<ErrorScreen />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
