import React from 'react'
import { connect } from 'dva'
import Header from '../components/home/Header'
import style from './style/home.less'

const Home = ({dispatch, products}) => {
  return (
    <div className={style.name}>
      <Header></Header>
      <div className={style['body-content']}>
        <div className={style['list-left']}>list</div>
        <div className={style['list-content']}>content</div>
      </div>
    </div>
  )
}
// export default Products;
export default connect(({ products }) => ({
  products,
}))(Home);