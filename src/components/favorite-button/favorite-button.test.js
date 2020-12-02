import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {FavoriteButton} from './favorite-button';
import {noop} from '../../test-data';

const renderer = new ShallowRenderer();

describe(`FavoriteButton renders correctly`, () => {
  it(`When film is favorite`, () => {
    renderer.render(
        <FavoriteButton
          id={3}
          isFavorite={true}
          isToggling={false}
          toggleFavoriteAction={noop}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`When film is not favorite`, () => {
    renderer.render(
        <FavoriteButton
          id={3}
          isFavorite={false}
          isToggling={false}
          toggleFavoriteAction={noop}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`When adding/removing to favorite im progress`, () => {
    renderer.render(
        <FavoriteButton
          id={3}
          isFavorite={false}
          isToggling={true}
          toggleFavoriteAction={noop}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });
});
