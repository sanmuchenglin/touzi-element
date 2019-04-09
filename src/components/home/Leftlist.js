import React, { Component} from 'react'
import { connect } from 'dva'
import { Menu, Icon } from 'antd'
import { Link, routerRedux } from 'dva/router'

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
    const SubMenu = Menu.SubMenu;
    return (
      <div style={{ width: collapsed? 80:190 }}>
        <Menu
          selectedKeys={[this.props.location.pathname]}
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          mode="inline"
          theme="dark"
          style={{'height': height}}
          inlineCollapsed= {collapsed}
        >
        {menus.map(menu => {
          if(menu.item && menu.item.length > 0) {
            return (
              <SubMenu key={menu.index} title={<span><Icon type={menu.type} /><span>{menu.name}</span></span>}>
                {menu.item.map(it => {
                  return (<Menu.Item key={it.index}>{it.name}</Menu.Item>)
                })}
              </SubMenu>
            )
          } else {
            return (
              <Menu.Item key={menu.index}>
                <Icon type={menu.type} />
                <span>{menu.name}</span>
              </Menu.Item>
            )
          }
        })}
                <Menu.Item key="/products">
                    <Link to="/products">
                        <Icon type="home" />Home
                    </Link>
                </Menu.Item>
        </Menu>
      </div>
    )
  }
  
}
export default Leftlist