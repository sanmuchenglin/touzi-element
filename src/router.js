import React from 'react';
import { Router, Route, Switch, routerRedux } from 'dva/router';
import dynamic from 'dva/dynamic';
import Home from './routes/Home';
import Login from './routes/Login';

const { ConnectedRouter } = routerRedux

 
function RouterConfig({ history, app }) {
  return (
    <Router history={history}>
        <Switch>
          <Route path="/login" exact 
            component={Home} />
          <Route path="/" exact 
            component={dynamic({app, models:() => [import('./models/home')], component:() => import('./routes/Home')})} >
            <Route path="/indexPage" exact 
              component={dynamic({app, component:() => import('./routes/IndexPage')})} />
          </Route>
        </Switch>
    </Router>
  );
  // return (
  //   <ConnectedRouter history={history}>
  //     <Home>
  //       <Switch>
  //         <Route path="/indexPage" exact 
  //           component={dynamic({app, component:() => import('./routes/IndexPage')})} />
  //         <Route path="/products" exact 
  //           component={dynamic({app, models:() => [import('./models/products')], component:() => import('./routes/Products')})} />
  //       </Switch>
  //     </Home>
  //   </ConnectedRouter>
  // );
}

export default RouterConfig;
