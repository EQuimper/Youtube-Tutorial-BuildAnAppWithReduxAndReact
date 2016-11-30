import React, { PropTypes } from 'react';
import { NavBar } from './modules/';
import './App.css';

const App = ({ children, location }) => (
  <div>
    <NavBar path={location.pathname} />
    {children}
  </div>
);

App.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default App;
