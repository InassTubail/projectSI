import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import SignIn from './Pages/SignIn';

const App = () => (
  <div className="App">
    <Router>
      <Switch>
        <Route exact path="/" render={Home} />
        <Route exact path="/signUp" render={SignUp} />
        <Route exact path="/signIn" render={SignIn} />
      </Switch>
    </Router>
  </div>
);

export default App;
