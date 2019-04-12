import React, { Component } from 'react'
import { connect } from 'dva'
import {  Route, Switch, withRouter } from 'dva/router'
import { Layout} from 'antd'
import { delay } from '../utils/commonutils'
import Header from '../components/home/Header'
import HomeContent from '../components/home/HomeContent'

class Home extends Component {
  //高度修改后页面样式自适应
  heightChange = () => {
    this.props.dispatch({
      type: "home/adapt",
      payload: window.innerHeight -70
    })
  }

  //生命周期钩子组件加载完成后
  componentDidMount() {
    this.heightChange();
    window.onresize = delay(() => {
      this.heightChange();
    }, 200)
  }

  //退出登录
  doLogout = () => {
    this.props.dispatch({
      type: 'login/doLogout',
      payload: {user: "wang"}
    })
  }

  render() {
    const { location, navData } = this.props
    return (
      <Layout>
        <Header doLogout={this.doLogout}></Header>
        <HomeContent location={location}>
            <Switch>
                {
                    navData.map(item => (
                        <Route path={item.path} key={item.path} exact component={item.component}></Route>  
                    ))
                }
            </Switch>
        </HomeContent>
      </Layout>
    )
  }
}

export default withRouter(connect(({home, login}) => ({home, login}))(Home));