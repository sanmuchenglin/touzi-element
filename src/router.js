import React from 'react';
import { Router, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic';
import { checkCookie } from './utils/cookieutils'

function getRouter(HomeView,props,commonProps){
  // 这里可以判断用户是否处于登录状态，如果不是登录状态，直接返回到登录界面
  let isLogin = checkCookie("TOKEN");
  console.log(isLogin)
  if(isLogin){
    return <HomeView {...props} {...commonProps}></HomeView>
  }else{
    return <Redirect to="/login"></Redirect>
  }
  
}

//定义路由
const getRouterData = (app) => {

  const routerConfig = [
      {
          path:"/login",
          component:dynamic({app, models:() => [import('./models/login')], component:() => import('./routes/Login')}),
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
  const LoginView = dynamic({app, models:() => [import('./models/login')], component:() => import('./routes/Login')})
  const HomeView = dynamic({app, models:() => [import('./models/home'),import('./models/login')], component:() => import('./routes/Home')})
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
          <Route path="/" render={(props) =>getRouter(HomeView,props,commonProps)} />
        </Switch>
    </Router>
  );
}

export default RouterConfig;
