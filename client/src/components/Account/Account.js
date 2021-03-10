import { useState } from 'react';
import { Form, Input, Message, Button } from 'semantic-ui-react';

const Account = () => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [formError, setFormError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    var Error = false;
    if(Error === true){
      setFormError(true);
      return;
    }
    else{
      setFormError(false);
    }
  }

  return (
    <>
      <Form onSubmit={onSubmit} error={formError}>
        <Message
          error
          header='Missing Required Fields'
          content='Make Sure All Required Fields Are Filled In'
        />
        <Form.Field required error={userError}>
          <label>Username/Email/Phone</label>
          <Input
            placeholder='Enter User Information'
            value={user}
            type="text"
            fluid
            onChange={(e) => setUser(e.target.value)}
          />
        </Form.Field>
        <Form.Field required error={passwordError}>
          <label>Password</label>
          <Input
            placeholder='Enter Password'
            value={password}
            type="password"
            fluid
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Field>
        <Button type='submit' onClick={onSubmit}>Login</Button>
      </Form>
    </>
  );
}

export default Account;