import React from 'react';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Test from './Test';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <ul>
          <li>
            <Link to="/">Home</Link>
            <Link to="/test">Test</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/test" component={Test} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
