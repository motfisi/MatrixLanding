import React from 'react';
import { Button, Col, Result, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@constants';
import { Flex, Layout, Menu, Typography } from 'antd';

import './sass/index.scss';

const { Header: HeaderAntd } = Layout;

const items = [
  {
    key: 1,
    label: 'как мы работаем',
  },
  {
    key: 2,
    label: 'услуги',
  },
  {
    key: 3,
    label: 'портфолио',
  },
  {
    key: 4,
    label: 'кейсы',
  },
  {
    key: 5,
    label: 'контакты',
  },
];

function Header() {
  return (
    <HeaderAntd className="header">
      <Row align="middle" justify="space-between">
        <Col>
          <Typography.Text className="header__title">MATRIX</Typography.Text>
        </Col>
        <Col>
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['1']}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Col>
      </Row>
    </HeaderAntd>
  );
}

export default Header;
