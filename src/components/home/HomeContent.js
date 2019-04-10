import React, { Component } from 'react'
import {Icon, Layout, Breadcrumb} from 'antd'
import { connect } from 'dva'
import LeftList from './Leftlist'
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
    const { children, location } = this.props
    return (
      <div>
        <LeftList></LeftList>
        <Layout>
          <span onClick={this.toggleCollapsed} className={style['bar']}>
            <Icon type={this.props.collapsed? "menu-unfold":"menu-fold"} style={{fontSize: 18}}/>
          </span>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item>
          </Breadcrumb>
          <div>
            children
          </div>
          </Layout>
      </div>
    )
  }
}

export default HomeContent