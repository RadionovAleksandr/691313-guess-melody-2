import React from 'react';
import renderer from 'react-test-renderer';
import Welcome from './welcome';

it(`renders correctly Welcome`, () => {
  const tree = renderer.create(
      <Welcome
        gameTime={0}
        errorCount={0}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
