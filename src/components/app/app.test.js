import React from 'react';
import renderer from 'react-test-renderer';
import App from './app';

it(`renders correctly App`, () => {
  const tree = renderer.create(
      <App
        gameTime={0}
        errorCount={0}
      />).toJSON();

  expect(tree).toMatchSnapshot();
});
