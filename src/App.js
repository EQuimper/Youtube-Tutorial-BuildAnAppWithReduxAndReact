import React from 'react';
import logo from './logo.svg';
import injectTapEventPlugin from 'react-tap-event-plugin';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { NavBar } from './modules';
import './App.css';

injectTapEventPlugin();

const App = ({ children }) => (
  <MuiThemeProvider>
    <div>
      <NavBar />
      {children}
    </div>
  </MuiThemeProvider>
);

export default App;
