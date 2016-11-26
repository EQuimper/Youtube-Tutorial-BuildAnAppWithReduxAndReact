import React from 'react';
import logo from './logo.svg';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh'
  }
}

const App = () => (
  <div style={styles.root}>
    <b>Hello</b> <img src={logo} alt="logo" height="50" width="50" />
  </div>
);

export default App;
