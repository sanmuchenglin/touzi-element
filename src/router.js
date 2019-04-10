import React from 'react';
import { Router, Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';

const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Switch>
        <Route path="/" exact 
          component={dynamic({app, models:() => [import('./models/home')], component:() => import('./routes/Home')})} />
        <Route path="/products" exact 
          component={dynamic({app, models:() => [import('./models/products')], component:() => import('./routes/Products')})} />
      </Switch>
    </ConnectedRouter>
  );
}

export default RouterConfig;
