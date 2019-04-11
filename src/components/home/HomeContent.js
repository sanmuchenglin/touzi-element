import React, { Component } from 'react'
import {Icon, Layout, Breadcrumb} from 'antd'
import { connect } from 'dva'
import LeftList from './Leftlist'
import BreadCread from './BreadCread'
import style from './home.less'

@connect(
  ({home}) => ({
    collapsed: home.collapsed
  })
)
class HomeContent extends Component {
  toggleCollapsed = () => {
    this.props.dispatch({
      type: 'home/collapse'
    })
  }
  render() {
    const { location, children } = this.props
    console.log(location)
    return (
      <Layout>
          <LeftList></LeftList>
          <Layout>
            <BreadCread pathName={location.pathname}>
              <span onClick={this.toggleCollapsed} className={style['trigger']}>
                <Icon type={this.props.collapsed? "menu-unfold":"menu-fold"} style={{fontSize: 18}}/>
              </span>
            </BreadCread>
            <Layout> 
              {children}
            </Layout> 
          </Layout>
      </Layout>
    )
  }
}

export default HomeContent