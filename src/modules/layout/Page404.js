import React from 'react';
import { Button } from 'semantic-ui-react';
import { browserHistory } from 'react-router';

const styles = {
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '80vh',
    flexDirection: 'column'
  }
}

const Page404 = () => (
  <div style={styles.root}>
    <img src="http://files.sharenator.com/fun_with404_errors_60_uphaa_com-s450x322-82555.jpg" height="300" width="500" alt="404" />
    <Button onClick={() => browserHistory.push('/')}>ComeBack Home</Button>
  </div>
);

export default Page404;
