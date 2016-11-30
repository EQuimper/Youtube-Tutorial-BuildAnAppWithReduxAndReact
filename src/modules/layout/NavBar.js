import React, { PropTypes } from 'react';
import { Menu } from 'semantic-ui-react';
import { browserHistory } from 'react-router';
import logo from '../../logo.svg';
import './styles.css';

const NavBar = ({ path }) => (
  <Menu>
    <Menu.Menu>
      <Menu.Item onClick={() => browserHistory.push('/')}>
          MyFullFeaturesList <img src={logo} alt="logo" className="NavBar-logo" />
      </Menu.Item>
    </Menu.Menu>
    <Menu.Menu position="right">
      <Menu.Item
        onClick={() => browserHistory.push('/signup')}
        active={path === '/signup'}
      >
        Sign Up
      </Menu.Item>

      <Menu.Item
        onClick={() => browserHistory.push('/login')}
        active={path === '/login'}
      >
        Login
      </Menu.Item>
    </Menu.Menu>
  </Menu>
);

NavBar.propTypes = {
  path: PropTypes.string.isRequired
};

export default NavBar;
