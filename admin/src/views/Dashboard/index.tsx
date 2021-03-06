import React from 'react';
import { Row, Col } from 'antd';
import RowInfoCard from './RowInfoCard';
import Weather from './Weather';
import Performance from './Performance';
import SaleTable from './SaleTable';
import DaySales from './daySales';
import DaySet from './daySet';
import './dashboard.scss';

const Dashboard: React.FC = () => (
  <div className="dashboard">
    <DaySet></DaySet>
    <RowInfoCard />
    {/* <Row gutter={24}>
      <Col xl={14} lg={14} md={24} sm={24} xs={24}>
        <Weather />
      </Col>
      <Col xl={10} lg={10} md={24} sm={24} xs={24}>
        <Performance />
      </Col>
    </Row> */}
    <Row>
      <Col span={24}>
        <DaySales />
      </Col>
    </Row>
    <Row>
      <Col span={24}>
        <SaleTable />
      </Col>
    </Row>
  </div>
);

export default Dashboard;
