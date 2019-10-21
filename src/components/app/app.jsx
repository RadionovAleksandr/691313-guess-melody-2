import React from 'react';
import PropTypes from 'prop-types';
import Welcome from '../welcome/welcome.jsx';

const App = ({gameTime, errorCount, playClickHandler}) => {
  return (
    <Welcome
      gameTime={gameTime}
      errorCount={errorCount}
      playClickHandler={playClickHandler}
    />
  );
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
  playClickHandler: PropTypes.func,
};

export default App;
