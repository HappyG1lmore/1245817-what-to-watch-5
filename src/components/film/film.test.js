import React from 'react';
import ShallowRenderer from 'react-test-renderer/shallow';
import {Film} from './film';
import {films, noop} from '../../test-data';
import {AuthorizationStatus} from '../../constants';


const renderer = new ShallowRenderer();

describe(`Film renders correctly`, () => {
  it(`When user is authorized`, () => {
    renderer.render(
        <Film
          history={{push: noop}}
          match={{params: {id: 3}}}
          url={`/films/3`}
          getFilmInformation={noop}
          film={films[2]}
          authorizationStatus={AuthorizationStatus.AUTH}
          clearFilm={noop}
          getCommentsList={noop}
          clearReviews={noop}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

  it(`When user not authorized`, () => {
    renderer.render(
        <Film
          history={{push: noop}}
          match={{params: {id: 3}}}
          url={`/films/3`}
          getFilmInformation={noop}
          film={films[2]}
          authorizationStatus={AuthorizationStatus.NO_AUTH}
          clearFilm={noop}
          getCommentsList={noop}
          clearReviews={noop}
        />
    );
    const tree = renderer.getRenderOutput();
    expect(tree).toMatchSnapshot();
  });

});
