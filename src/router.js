import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact 
          component={dynamic({app, models:() => [import('./models/home')], component:() => import('./routes/Home')})} />
        <Route path="/products" exact 
          component={dynamic({app, models:() => [import('./models/products')], component:() => import('./routes/Products')})} />
        <Route path="/bre" exact 
          component={dynamic({app, component:() => import('./routes/Bread')})} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
