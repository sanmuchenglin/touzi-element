import React from 'react'
import { Button, Form, Icon, Input, Checkbox } from 'antd'
import style from './login.less'

const UserName = ({form, onSubmit}) => {
  const { getFieldDecorator } = form
  return (
    <div>
      <Form.Item> 
        {getFieldDecorator('userName', {
          rules: [{ required: true, message: '请输入用户名！' }],
        })(
          <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="用户名" />
        )}
      </Form.Item>
      <Form.Item>
          {getFieldDecorator('password', {
            rules: [{ required: true, message: '请输入密码' }],
          })(
            <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="密码" />
          )}
        </Form.Item>
        <Form.Item>
          {getFieldDecorator('remember', {
            valuePropName: 'checked',
            initialValue: true,
          })(
            <Checkbox>自动登录</Checkbox>
          )}
          <a className={style['login-form-forgot']} href="">忘记密码</a>
          <Button type="primary" htmlType="submit" className={style['login-form-button']}>
            登录
          </Button>
          <a href="">注册账户</a>
        </Form.Item>
      </div>
  )
}

export default UserName