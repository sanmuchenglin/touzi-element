import React from 'react'
import { Menu, Dropdown, Icon} from 'antd'
import style from './home.less'
import UserImage from '../../assets/avatar.png'

const UserInfor = ({doLogout}) => {
  const menu = (
    <Menu onClick="">
      <Menu.Item key="1"><Icon type="user" />1st menu item</Menu.Item>
      <Menu.Item key="2"><Icon type="user" />2nd menu item</Menu.Item>
      <Menu.Item key="3"><Icon type="user" />3rd item</Menu.Item>
    </Menu>
  );

  return (
    <div className={style['user-info']}>
      <img src={UserImage} className={style["user-image"]} alt="" />
      <div className={style["user-wel"]}>
        <p className={style["wel"]}>欢迎</p>
        <p className={style["username"]}>admin</p>
      </div>
      <Dropdown overlay={menu} className={style["opermenu"]} >
        <Icon type="caret-down" />
      </Dropdown>
      <Icon onClick={doLogout} type="logout" />
    </div>
  )
}

export default UserInfor