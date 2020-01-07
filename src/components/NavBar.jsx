import React from 'react';
import { STRINGS as S }  from './../constants';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;


const NavBar = () => {
  return (
    <Header>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['2']}
        style={{ lineHeight: '64px' }}
      >
        <Menu.Item><Link to="/new"> {S.sNewChallenge}</Link></Menu.Item>
        <Menu.Item><Link to="/challenges"> {S.sMyChallenges}</Link></Menu.Item>
      </Menu>
    </Header>
  ) 
};

export default NavBar;