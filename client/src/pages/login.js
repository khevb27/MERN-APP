import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';

import Auth from '../utils/auth';

function BasicExample() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { error, data }] = useMutation(LOGIN_USER);
  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    console.log(`The Email you entered was: ${email}, The Password you entered was: ${password}`)
    try {
      const { data } = await login({
        variables:
        { email: email, password: password },
        
      });

      Auth.login(data.login.token);
    } catch (e) {
      alert("Invalid Login");
      console.error(e);
    }
  };

return (
    <Form className="login col-12 mx-auto m-3" onSubmit={handleSignupSubmit}>
        <h1 className="title">Login</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label><h4>Email</h4></Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email}
          onChange={(e) => setEmail(e.target.value)} size="lg" style={{ width: '80%' }}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><h4>Password</h4></Form.Label>
        <Form.Control type="password" placeholder="Enter Password" value={password}
          onChange={(e) => setPassword(e.target.value)} size="lg" style={{ width: '80%' }}/>
      </Form.Group>
      <Button variant="primary" type="submit" size="lg" style={{ width: '80%' }}>
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;