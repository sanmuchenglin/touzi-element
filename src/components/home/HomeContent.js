import React, { Component } from 'react'
import {Icon} from 'antd'
import { connect } from 'dva'
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
      <div className={style['home-content']}>
        <div className={style['bread-crumb']}>
          <span onClick={this.toggleCollapsed} className={style['bar']}>
            <Icon type={this.props.collapsed? "menu-unfold":"menu-fold"} style={{fontSize: 18}}/>
          </span>
        </div>
        <div>
          {children}
        </div>
      </div>
    )
  }
}

export default HomeContent