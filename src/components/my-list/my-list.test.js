import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {MyList} from './my-list';
import {films, noop} from '../../test-data';

const renderer = new ShallowRenderer();

test(`MyList renders correctly`, () => {
  renderer.render(
      <MyList
        favoriteFilms={films}
        fetchFavoriteFilmsAction={noop}
        resetFavoriteFilmAction={noop}
      />
  );
  const tree = renderer.getRenderOutput();
  expect(tree).toMatchSnapshot();
});


