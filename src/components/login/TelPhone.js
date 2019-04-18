import React from 'react'
import { Button, Form, Icon, Input, Checkbox, Row, Col } from 'antd'
import style from './login.less'

const TelPhone = ({form, onSubmit}) => {
  const { getFieldDecorator } = form
  return (
    <div>
      <Form.Item> 
        {getFieldDecorator('telphone', {
          rules: [{ required: true, message: '请输入手机号！' }],
        })(
          <Input prefix={<Icon type="mobile" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="手机号" />
        )}
      </Form.Item>
      <Form.Item>
        <Row type="flex" justify="space-between">
          <Col span={15}>
            {getFieldDecorator('vercode', {
              rules: [{ required: true, message: '请输入验证码！' }],
            })(
              <Input prefix={<Icon type="mail" style={{ color: 'rgba(0,0,0,.25)'}} />} placeholder="验证码" />
            )}
          </Col>
          <Col span={8}>
            <Button type="default" className={style['']}>
              获取验证码
            </Button>
          </Col>
        </Row>
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

export default TelPhone