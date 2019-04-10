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
      <Layout>
          <LeftList></LeftList>
          <Layout>  
            <Breadcrumb style={{background: '#dde6f1'}}>
              <span onClick={this.toggleCollapsed} className={style['trigger']}>
                <Icon type={this.props.collapsed? "menu-unfold":"menu-fold"} style={{fontSize: 18}}/>
              </span>
              <Breadcrumb.Item style={{ lineHeight: '30px' }}>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <div>
              {children}
            </div>
          </Layout>
      </Layout>
    )
  }
}

export default HomeContent