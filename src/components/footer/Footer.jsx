import React from 'react';
import { Button, Result, Typography } from 'antd';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '@constants';
import { Flex, Layout, Menu } from 'antd';

import './sass/index.scss';

const { Footer: FooterAntd } = Layout;

function Footer() {
  return (
    <FooterAntd className="footer">
      <Typography.Text className="footer__text">
        created by{' '}
        <a href="https://t.me/motfisi" target="_blank">
          @motfisi
        </a>
      </Typography.Text>
    </FooterAntd>
  );
}

export default Footer;
