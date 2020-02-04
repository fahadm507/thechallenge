import React from 'react';
import GoogleAuth from './GoogleAuth';
import { STRINGS as S }  from './../constants';
import { Link } from 'react-router-dom';
import { Menu, Row, Col } from 'antd';

// const { Header } = Layout;


const NavBar = () => {
  return (
      <Menu
        theme="red"
        mode="horizontal"
        defaultSelectedKeys={['3']}
        style={{ lineHeight: '50px' }}
      >
        <Row>
          <Col span={12}>
            <Menu.Item><Link to="/"> Challengily </Link></Menu.Item>
          </Col>
          <Col span={8}>
              <Menu.Item>
                <Link to="/home"> Home </Link>
                <Link to="/about us"> {S.sMyChallenges}</Link>
                <Link to="/new"> {S.sNewChallenge} </Link>
                <Link to="/challenges"> {S.sMyChallenges}</Link>
              </Menu.Item>
          </Col>
          <Col col span={2} style={{ marginRight: 0}}>
            <Menu.Item>
              <GoogleAuth />
            </Menu.Item>
          </Col>
        </Row>
      </Menu>
  ) 
};

export default NavBar;