import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, {useState} from 'react';
import { useMutation } from '@apollo/client';
import { ADD_USER } from '../utils/mutations';

import Auth from '../utils/auth';

function BasicExample() {
  const [username, setUser] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [addUser, { error, data }] = useMutation(ADD_USER);
  const handleSignupSubmit = async (event) => {
    event.preventDefault();
    console.log(`The Username you entered was: ${username}, The Email you entered was: ${email}, The Password you entered was: ${password}`)
    try {
      const { data } = await addUser({
        variables:
        { username: username, email: email, password: password },
        
      });

      Auth.login(data.addUser.token);
    } catch (e) {
      console.error(e);
    }
  };

return (
    <Form className="col-8 mx-auto m-3" onSubmit={handleSignupSubmit}>
        <h1>SignUp</h1>
      <Form.Group className="mb-3" controlId="formBasicEmail" >
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter Email" value={email}
          onChange={(e) => setEmail(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter Username" value={username}
          onChange={(e) => setUser(e.target.value)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter Password" value={password}
          onChange={(e) => setPassword(e.target.value)}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default BasicExample;