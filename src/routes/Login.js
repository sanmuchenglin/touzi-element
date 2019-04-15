import React, { Component } from 'react'
import { connect } from 'dva'
import { Button, Form, Icon, Input, Checkbox, Tabs } from 'antd'
import { UserName, TelPhone } from '../components/login'
import style from './login.less'

const Tabpane = Tabs.TabPane;

@connect(({login}) => ({
  login
}))
@Form.create()
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeKey: props.login.defaultKey
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const { tabs } = this.props.login
    const fieldNames = tabs.filter((tab) => {
      if(tab.key === this.state.activeKey) 
        return tab;
    })
    this.props.form.validateFields(fieldNames[0].forms, (err, values) => {
      if (!err) {
        this.props.dispatch({
          type: "login/doLogin",
          payload: values
        })
      }
    });
  }

  tabChange = (activeKey) => {
    this.setState({
      activeKey
    })
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const {defaultKey, tabs} = this.props.login
    return (
      <div className={style['login-layout']}>
        <div className={style['login-content']}>
          <Form onSubmit={this.handleSubmit} className={style['login-from']} >
            <Tabs defaultActiveKey={defaultKey} onChange={this.tabChange}>
              {tabs.map((tabi) => {
                return (<Tabpane tab={tabi.tabName} key={tabi.key}>
                          <tabi.Component 
                            form={this.props.form}
                            onSubmit={this.handleSubmit}
                          ></tabi.Component>
                        </Tabpane>)})}
            </Tabs>
          </Form>
        </div>
      </div>
    )
  }
}

export default Login