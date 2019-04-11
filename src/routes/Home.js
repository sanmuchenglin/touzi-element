import React, { Component } from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
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
    const { children, location } = this.props
    return (
      <Layout>
        <Header></Header>
        <HomeContent location={location}>
            {children}
        </HomeContent>
      </Layout>
    )
  }
}

export default withRouter(connect(({home}) => ({home}))(Home));