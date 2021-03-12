import { useState } from 'react';
import { Form, Input, Message, Button, Loader } from 'semantic-ui-react';

const Account = ({Site}) => {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');

  const [formError, setFormError] = useState(false);
  const [userError, setUserError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    var Error = false;
    if(user === ''){
      setUserError(true);
      Error = true;
    }
    else{
      setUserError(false);
    }
    if(password === ''){
      setPasswordError(true);
      Error = true;
    }
    else{
      setPasswordError(false);
    }
    if(Error === true){
      setFormError(true);
      return;
    }
    else{
      setFormError(false);
    }
    setLoading(true);
    // Fetch Function
    setLoading(false);
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
      {loading && 
        <Loader active={loading} size='large' inline='centered' />
      }
    </>
  );
}

export default Account;