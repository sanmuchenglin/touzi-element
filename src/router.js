import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import dynamic from 'dva/dynamic';

//定义路由
export const getRouterData = (app) => {

  const routerConfig = [
      {
          path:"/login",
          component:dynamic({app, component:() => import('./routes/Login')}),
      },
      {
          path:"/",
          component:dynamic({app, models:() => [import('./models/home')], component:() => import('./routes/Home')})
      },
      {
          path:"/indexPage",
          component:dynamic({app, component:() => import('./routes/IndexPage')})
      },
      {
          path:"/products",
          component:dynamic({app, models:() => [import('./models/products')], component:() => import('./routes/Products')})
      },
  ];
    
  return routerConfig;
}
 
function RouterConfig({ history, app }) {
  const LoginView = dynamic({app, component:() => import('./routes/Login')})
  const HomeView = dynamic({app, models:() => [import('./models/home')], component:() => import('./routes/Home')})
  const commonProps = {
    app,
    navData: getRouterData(app).filter((item)=>{
      return (item.path !== "/" && item.path !== "/login");
    })
  }
  return (
    <Router history={history}>
        <Switch>
          <Route path="/login" render={(props) => <LoginView {...props} />} />
          <Route path="/" render={(props) => <HomeView {...props} {...commonProps}></HomeView>} />
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
