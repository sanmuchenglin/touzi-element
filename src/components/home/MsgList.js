import React from 'react'
import { connect } from 'dva'
import style from './home.less'
import {Icon} from 'antd'

const MsgList = ({dispatch, message}) => {
  return (
    <ul className={style['msg-content']}>
      <li className={style['msg-li']}>
        <a href='#/index'>
          <div>
            <Icon type="bars" className={style['msg-i']} />
            <sup>{message.bars}</sup>
          </div>
        </a>
      </li>
      <li className={style['msg-li']}>
        <a href='#/index'>
          <div>
            <Icon type="mail" className={style['msg-i']} />
            <sup>{message.mails}</sup>
          </div>
        </a>
      </li>
      <li className={style['msg-li']}>
        <a href='#/index'>
          <div>
            <Icon type="notification" className={style['msg-i']} />
            <sup>{message.notis}</sup>
          </div>
        </a>
      </li>
    </ul>
  )
}

// export default commonent
export default connect(({ home }) => ({message: home.message}))(MsgList)