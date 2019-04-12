import React, { Component } from 'react'
import { connect } from 'dva'
import {  Route, Switch, withRouter } from 'dva/router'
import { Layout} from 'antd'
import { delay } from '../utils/commonutils'
import Header from '../components/home/Header'
import HomeContent from '../components/home/HomeContent'

class Home extends Component {
  heightChange = () => {
    this.props.dispatch({
      type: "home/adapt",
      payload: window.innerHeight -70
    })
  }

  componentDidMount() {
    this.heightChange();
    window.onresize = delay(() => {
      this.heightChange();
    }, 200)
  }

  render() {
    const { location, navData } = this.props
    console.log(this.props)
    return (
      <Layout>
        <Header></Header>
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

export default withRouter(connect(({home}) => ({home}))(Home));