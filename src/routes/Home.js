import React, { Component } from 'react'
import { connect } from 'dva'
import { delay } from '../utils/commonutils'
import Header from '../components/home/Header'
import LeftList from '../components/home/Leftlist'
import style from './style/home.less'

@connect(({ home }) => (
  {home}
))
class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ch: 900
    }
  }
  componentDidMount() {
    window.onresize = delay(() => {
      this.setState({
        ch: window.innerHeight - 70
      })
    }, 200)
  }

  render() {
    return (
      <div className={style.name}>
        <Header></Header>
        <div className={style['body-content']} style={{height: this.state.ch}}>
          <LeftList className={style['list-left']}></LeftList>
          <div className={style['list-content']}>content</div>
        </div>
      </div>
    )
  }
}

export default Home;