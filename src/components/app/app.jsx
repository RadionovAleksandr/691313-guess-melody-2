import React from 'react';
import Welcome from '../welcome/welcome.jsx';

const App = ({gameTime, errorCount}) => {
  return (
    <Welcome
      gameTime={gameTime}
      errorCount={errorCount}
    />
  );
};

export default App;
