
import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import MoreFilmsButton from './more-films-button';
import {noop} from '../../test-data';

const renderer = new ShallowRenderer();

describe(`MoreFilmsButton renders correctly`, () => {
  it(`When is visible`, () => {
    renderer.render(
        <MoreFilmsButton
          isVisible={true}
          onClick={noop}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`When is not visible`, () => {
    renderer.render(
        <MoreFilmsButton
          isVisible={false}
          onClick={noop}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
