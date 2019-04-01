import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Home from './routes/Home';
import Products from './routes/Products'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products"  component={Products} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
