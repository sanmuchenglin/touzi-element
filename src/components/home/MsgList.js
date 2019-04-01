import React from 'react'
import style from './home.less'
import {Icon} from 'antd';

const MsgList = () => {
  return (
    <ul className={style['msg-content']}>
      <li className={style['msg-li']}>
        <a href='#/index'>
          <div>
            <Icon type="bars" className={style['msg-i']} />
            <sup>1</sup>
          </div>
        </a>
      </li>
      <li className={style['msg-li']}>
        <a href='#/index'>
          <div>
            <Icon type="mail" className={style['msg-i']} />
            <sup>12</sup>
          </div>
        </a>
      </li>
      <li className={style['msg-li']}>
        <a href='#/index'>
          <div>
            <Icon type="notification" className={style['msg-i']} />
            <sup>32</sup>
          </div>
        </a>
      </li>
    </ul>
  )
}

export default MsgList