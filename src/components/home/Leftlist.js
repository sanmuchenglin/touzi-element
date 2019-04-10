import React, { Component} from 'react'
import { connect } from 'dva'
import { Layout, Menu, Breadcrumb, Icon, } from 'antd'
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
    console.log(collapsed)
    const { SubMenu } = Menu;
    const { Header, Content, Sider } = Layout;
    return (
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
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
                        <Icon type="home" />
                        Home
                    </Link>
                </Menu.Item>
        </Menu>
      </Sider>
    )
  }
  
}
export default Leftlist