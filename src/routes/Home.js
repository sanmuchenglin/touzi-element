import React, { Component } from 'react'
import { connect } from 'dva'
import { withRouter } from 'dva/router'
import { delay } from '../utils/commonutils'
import Header from '../components/home/Header'
import LeftList from '../components/home/Leftlist'
import HomeContent from '../components/home/HomeContent'
import style from './style/home.less'

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
      <div className={style.name}>
        <Header></Header>
        <div className={style['body-content']} style={{height: this.props.height}}>
          <LeftList location={location} className={style['list-left']}></LeftList>
          <HomeContent 
            className={style['list-content']}>
            {children}
          </HomeContent>
        </div>
      </div>
    )
  }
}

export default withRouter(connect(({home}) => ({home}))(Home));