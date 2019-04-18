import React, { Component} from 'react'
import { connect } from 'dva'
import { Layout, Menu, Icon, } from 'antd'
import { Link } from 'dva/router'

@connect(
  ({home}) => ({home})
)
class Leftlist extends Component {
  toggleCollapsed = () => {
    this.props.dispatch({
      type: 'home/collapse'
    })
  }

  getMenuList = () => {
    this.props.dispatch({
      type: 'home/getMenuList',
      payload: {user: "wang"}
    })
  }

  componentDidMount() {
    this.getMenuList();
  }

  render() {
    const {collapsed, height, menus} = this.props.home;
    const { SubMenu } = Menu;
    const { Sider } = Layout;
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width="160"
        style={{overflow: 'auto'}}
      >
        <Menu
          mode="inline"
          theme="dark"
          style={{'height': height}}
        >
          {menus.map(menu => {
            if(menu.item && menu.item.length > 0) {
              return (
                <SubMenu key={menu.index} title={<span><Icon type={menu.type} /><span>{menu.name}</span></span>}>
                  {menu.item.map(it => {
                    return (
                    <Menu.Item key={it.index}>
                      <Link to={it.link? it.link:'/'}>
                        {it.name}
                      </Link>
                    </Menu.Item>)
                  })}
                </SubMenu>
              )
            } else {
              return (
                <Menu.Item key={menu.index}>
                  <Link to={menu.link? menu.link:'/'}>
                    <Icon type={menu.type} />
                    <span>{menu.name}</span>
                  </Link>
                </Menu.Item>
              )
            }
          })}
        </Menu>
      </Sider>
    )
  }
  
}
export default Leftlist