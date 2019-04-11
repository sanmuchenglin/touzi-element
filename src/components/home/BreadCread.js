import React from 'react'
import {Breadcrumb} from 'antd'
import { Link } from 'dva/router'

const breadcrumbNameMap  = {
  '/indexPage' : 'Index',
  '/products'  : 'Pro'
}

const BreadCread = ({pathName, children}) => {
  const pathSnippets = pathName.split('/').filter(i => i);
  const extraBreadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`;
    return (
      <Breadcrumb.Item key={url}>
        <Link to={url}>
          {breadcrumbNameMap[url]}
        </Link>
      </Breadcrumb.Item>
    );
  })
  const breadcrumbItems = [(
    <Breadcrumb.Item key="home" style={{ lineHeight: '30px' }}>
      <Link to="/">Home</Link>
    </Breadcrumb.Item>
  )].concat(extraBreadcrumbItems);
  return (
    <Breadcrumb style={{background: '#dde6f1'}}>
      { children }
      { breadcrumbItems }
    </Breadcrumb>
  )
}

export default BreadCread