import React from 'react';
import GoogleAuth from './GoogleAuth';
import { STRINGS as S }  from './../constants';
import { Link } from 'react-router-dom';
import { Menu } from 'antd';

// const { Header } = Layout;


const NavBar = () => {
  return (
      <Menu
        theme="red"
        mode="horizontal"
        defaultSelectedKeys={['3']}
        style={{ lineHeight: '50px' }}
      >
        <Menu.Item><Link to="/new"> {S.sNewChallenge}</Link></Menu.Item>
        <Menu.Item><Link to="/challenges"> {S.sMyChallenges}</Link></Menu.Item>
        <Menu.Item><GoogleAuth /></Menu.Item>
      </Menu>
  ) 
};

export default NavBar;