import React from 'react';
import GoogleAuth from './GoogleAuth';
import { STRINGS as S }  from './../constants';
import { Link } from 'react-router-dom';
import { Menu, Icon, Input, Button } from 'antd';
const { SubMenu } = Menu;
const { Search } = Input;

const NavBar = () => {
  return (
  <Menu mode="horizontal">
        <Menu.Item key="challengilyBrand">
          <Icon type="smile" />
          CHALLENGILY
        </Menu.Item>
        
        <Menu.Item key="globalSearch" style={{ borderBottom: 'none', marginLeft: 200 }}>
            <Search placeholder="Discover challenges"  />
        </Menu.Item>
        <SubMenu style={{ float: 'right' }}
          title={
            <span className="submenu-title-wrapper">
              <Icon type="user" />
              My profile
            </span>
          }
        >
          <Menu.ItemGroup title="Account">
            <Menu.Item key="setting:1">My challenges</Menu.Item>
            <Menu.Item key="setting:2">Change settings</Menu.Item>
            <Menu.Item key="setting:3"><GoogleAuth /></Menu.Item>
          </Menu.ItemGroup>
        </SubMenu>
          <Menu.Item key="newChallenge" style={{ borderBottom: 'none' }}>
              <Button type="primary" placeholder="Discover challenges">
                <Link to="/new"><Icon type="plus-circle" /> New challenge
                </Link>
              </Button>
            </Menu.Item>
          <Menu.Item key="challengesMenu" style={{ float: 'right' }}>
          <Icon type="down" />
          My Challenges
        </Menu.Item>
      </Menu>     
  ) 
};

export default NavBar;