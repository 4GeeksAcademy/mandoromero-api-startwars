import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './Details';
import Favorites from './Favorites';

const Layout = () => (
  <Router>
    <div>
      <header>
        <h1>Star Wars App</h1>
      </header>
      <main>
        <Switch>
          <Route path="/" exact component={Details} />
          <Route path="/favorites" component={Favorites} />
          <Route path="/details/:entityType/:uid" component={Details} />
        </Switch>
      </main>
      <footer>
        <p>&copy; 2024 Star Wars App</p>
      </footer>
    </div>
  </Router>
);

export default Layout;