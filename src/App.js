import React from 'react';
import './App.scss';

import Navigation from './components/Navigation/Navigation';
import BoardContainer from './components/Board/BoardContainer';

function App() {
  return (
    <div className="App">
      <Navigation/>
      <BoardContainer/>
    </div>
  );
}

export default App;
