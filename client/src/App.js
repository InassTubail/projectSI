import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './pages/Home';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" render={Home} />
      </Switch>
    </Router>
  </div>
);

export default App;
