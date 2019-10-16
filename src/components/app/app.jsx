import React from 'react';
import PropTypes from 'prop-types';
import Welcome from '../welcome/welcome.jsx';

const App = ({gameTime, errorCount}) => {
  return (
    <Welcome
      gameTime={gameTime}
      errorCount={errorCount}
    />
  );
};

App.propTypes = {
  gameTime: PropTypes.number.isRequired,
  errorCount: PropTypes.number.isRequired,
};

export default App;
