import React from 'react'
import style from './home.less'
import Titleimg from '../../assets/logo.png'
import MsgList from './MsgList'
import UserInfo from './UserInfo'

const Header = ({doLogout}) => {
  return (
    <header className={style['head-nav']}>
      <div className={style['head-title']}>
        <img className={style['logo']} src={Titleimg} alt="" />
        <span>xxx金融后台管理系统</span>
      </div> 
      <UserInfo doLogout={doLogout} />
      <MsgList />
    </header>
  )
}

export default Header;