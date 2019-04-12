import React, { Component } from 'react'
import { connect } from 'dva'
import { Button } from 'antd'

@connect(({login}) => ({
  login
}))
class Login extends Component {

  doLogin = () => {
    this.props.dispatch({
      type: "login/doLogin",
      payload: {user: "wang"}
    })
  }

  render() {
    return (
      <Button onClick={this.doLogin} type="primary">登录</Button>
    )
  }
}

export default Login