import React, { Component }from 'react';
import { connect } from 'dva';
import { Row, Col } from 'antd'
import styles from './IndexPage.less';
import BigbizCharts from '../components/indexpage/BigbizCharts'

class IndexPage extends Component {
  render() {
    return (
      <div style={{padding: '10px'}}>
        <div className={styles.row}>
          <div className={styles.col} style={{background: '#18a689'}}><p>+208.5</p><p>盈亏(千万)</p></div>
          <div className={styles.col} style={{background: '#99CC00'}}><p>+12.37</p><p>收益率(%)</p></div>
          <div className={styles.col} style={{background: '#33CC99'}}><p>264</p><p>意向投资人(人)</p></div>
          <div className={styles.col} style={{background: '#3b5999'}}><p>686</p><p>潜在投资人(人)</p></div>
          <div className={styles.col} style={{background: '#66CC99'}}><p>137</p><p>待审投资人(人)</p></div>
          <div className={styles.col} style={{background: '#009999'}}><p>100</p><p>审核中投资人(人)</p></div>
          <div className={styles.col} style={{background: '#FF9900'}}><p>86</p><p>审核通过投资人(人)</p></div>
          <div className={styles.col} style={{background: '#0099CC'}}><p>36</p><p>新增投资人(人)</p></div>
        </div>
        <Row type="flex" justify="space-around">
          <Col span={12}> <BigbizCharts /> </Col>
          <Col span={12}> <BigbizCharts /> </Col>
          <Col span={8}> <BigbizCharts /> </Col>
          <Col span={8}> <BigbizCharts /> </Col>
          <Col span={8}> <BigbizCharts /> </Col>
        </Row>
      </div>
    )
  }
}

 IndexPage.propTypes = {
 };

export default IndexPage;
