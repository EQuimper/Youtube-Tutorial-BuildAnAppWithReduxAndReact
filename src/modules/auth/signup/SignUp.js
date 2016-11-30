import React from 'react';
import { Button, Checkbox, Form, Grid } from 'semantic-ui-react'

const styles = {
  root: {
    marginTop: '5%'
  }
}

const SignUp = () => (
  <Grid centered style={styles.root}>
    <Grid.Column width={6}>
      <Form>
        <Form.Field>
          <label>Email</label>
          <input placeholder="Email..." type="email" />
        </Form.Field>
        <Form.Field>
          <label>Password</label>
          <input placeholder="Password..." type="password" />
        </Form.Field>
        <Form.Field>
          <label>Confirm Password</label>
          <input placeholder="Confirm Password..." type="password" />
        </Form.Field>
        <Form.Field>
          <Checkbox label='I agree to the Terms and Conditions' />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </Grid.Column>
  </Grid>
);

export default SignUp;
