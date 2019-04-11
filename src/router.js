import React from 'react';
import { Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import Home from './routes/Home';

const { ConnectedRouter } = routerRedux

function RouterConfig({ history, app }) {
  return (
    <ConnectedRouter history={history}>
      <Home>
        <Switch>
          <Route path="/indexPage" exact 
            component={dynamic({app, component:() => import('./routes/IndexPage')})} />
          <Route path="/products" exact 
            component={dynamic({app, models:() => [import('./models/products')], component:() => import('./routes/Products')})} />
        </Switch>
      </Home>
    </ConnectedRouter>
  );
}

export default RouterConfig;
