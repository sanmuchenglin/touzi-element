import React, { Component } from 'react'
import {Icon, Layout} from 'antd'
import { connect } from 'dva'
import LeftList from './Leftlist'
import BreadCread from './BreadCread'
import style from './home.less'

@connect(
  ({home}) => ({
    home
  })
)
class HomeContent extends Component {
  toggleCollapsed = () => {
    this.props.dispatch({
      type: 'home/collapse'
    })
  }
  render() {
    console.log(this.props)
    const { location, children, home } = this.props
    const { height, collapsed } = home
    const { Content } = Layout
    return (
      <Layout>
          <LeftList />
          <Layout style={{height: height}}>
            <BreadCread pathName={location.pathname}>
              <span onClick={this.toggleCollapsed} className={style['trigger']}>
                <Icon type={collapsed? "menu-unfold":"menu-fold"} style={{fontSize: 18}}/>
              </span>
            </BreadCread>
            <Layout> 
              <Content style={{overflow: 'auto'}}>
                {children}
              </Content>
            </Layout> 
          </Layout>
      </Layout>
    )
  }
}

export default HomeContent