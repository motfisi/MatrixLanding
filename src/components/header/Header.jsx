import React from 'react';
import { Button, Col, Result, Row } from 'antd';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@constants';
import { Flex, Layout, Menu, Typography } from 'antd';

import './sass/index.scss';

const { Header: HeaderAntd } = Layout;

function Header() {
  return (
    <HeaderAntd className="header">
      <Typography.Text className="header__title">MATRIX</Typography.Text>
    </HeaderAntd>
  );
}

export default Header;
