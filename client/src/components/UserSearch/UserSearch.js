import { useState } from 'react';
import { Form, Input, Dropdown, Message, Button, Loader } from 'semantic-ui-react';

const UserSearch = ({siteChange, viewChange, propertiesChange }) => {
  const [site, setSite] = useState('');
  const [view, setView] = useState('');

  const [formError, setFormError] = useState(false);
  const [siteError, setSiteError] = useState(false);
  const [propertiesError, setPropertiesError] = useState(false);
  const [loading, setLoading] = useState(false);

  const viewOptions = [
    { key: 'image', value: 'image', text: 'Image' },
    { key: 'PDF', value: 'PDF', text: 'PDF' },
    { key: 'HTML', value: 'HTML', text: 'HTML' },
  ]

  const onSubmit = async (e) => {
    e.preventDefault();
    var Error = false;
    if (!site || !view) {
      setSiteError(true);
      Error = true;
    }
    else{
      setSiteError(false);
    }
    if(Error === true){
      setFormError(true);
      return;
    }
    else{
      setFormError(false);
    }
    var updatedSite = site;
    if (!/^https?:\/\//i.test(site)) {
      updatedSite = 'https://' + site;
    }
    setLoading(true);
    await fetch(`/userCheck/properties?url=${updatedSite}`)
    .then(response => response.json())
    .then(response => {
      propertiesChange(response);
      if(!((response.username || response.email || response.phone) && response.password)){
        setPropertiesError(true);
        return;
      }
      setPropertiesError(false);
      siteChange(site);
      viewChange(view);
    })
    .catch(error => console.log(error))
    setLoading(false);
  }

  return (
    <>
      {propertiesError === true &&
        <Message negative>
          <Message.Header>This Site Does Not Ask For Any Login Credentials</Message.Header>
          <p>Please Use The Site's Login Page</p>
        </Message>
      }
      <Form onSubmit={onSubmit} error={formError}>
        <Message
          error
          header='Missing Required Fields'
          content='Make Sure All Required Fields Are Filled In'
        />
        <Form.Field required error={siteError}>
          <label>Website</label>
          <Input
            placeholder='Insert Link'
            value={site}
            fluid
            onChange={(e) => setSite(e.target.value)}
            action={
              <Dropdown
                onChange={(e, data) =>  setView(data.value)}
                placeholder='View As...'
                search
                selection
                options={viewOptions}
              />
            }
          />
        </Form.Field>
        <Button type='submit' onClick={onSubmit}>Check Site</Button>
      </Form>
      {loading && 
        <Loader active={loading} size='large' inline='centered' />
      }
    </>
  );
}

export default UserSearch;