
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {DetailsTab} from './details-tab';
import {films} from '../../test-data';

const renderer = new ShallowRenderer();

test(`DetailsTab renders correctly`, () => {
  renderer.render(<DetailsTab
    film={films[1]} />);
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});
