import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';

import MetricsContainer from './components/Metrics/MetricsContainer';
import Navigation from './components/Navigation/Navigation';
import BoardContainer from './components/Board/BoardContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';

function App() {
  return (
    <Router>
      <Switch>
        <>
        <div className="App">
          <Navigation/>
          <Route exact path = '/' component={BoardContainer}/>
          <Route path = '/metrics' component={MetricsContainer} />
          <Route path = '/profile' component={ProfileContainer} />
          <Route path = '/login' component={LoginContainer} />
        </div>
        </>
      </Switch>
    </Router>
  );
}

export default App;
