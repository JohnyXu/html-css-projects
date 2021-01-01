import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
  Redirect,
} from 'react-router-dom';
import AirPods from './pages/AirPods';
import AnimatedNavigation from './pages/animated-navigation';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Redirect
            to={{
              pathname: '/airpods',
            }}
          ></Redirect>
        </Route>
        <Route exact path="/airpods" component={AirPods} />
        <Route exact path="/animated-navigation" component={AnimatedNavigation} />
      </Switch>
    </Router>
  );
}

export default App;
