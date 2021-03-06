import { useState } from 'react';
import { Form, Input, Dropdown, Message, Button } from 'semantic-ui-react';

const Search = ({siteChange, viewChange }) => {
  const [site, setSite] = useState('');
  const [view, setView] = useState('');

  const [formError, setFormError] = useState(false);
  const [siteError, setSiteError] = useState(false);

  const viewOptions = [
    { key: 'image', value: 'image', text: 'Image' },
    { key: 'PDF', value: 'PDF', text: 'PDF' },
    { key: 'HTML', value: 'HTML', text: 'HTML' },
  ]

  const onSubmit = (e) => {
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
      updatedSite = 'http://' + site;
    }
    siteChange(updatedSite);
    viewChange(view);
  }

  return (
    <>
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
    </>
  );
}

export default Search;