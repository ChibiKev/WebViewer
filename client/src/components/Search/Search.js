import { useState } from 'react';
import { Form, Input, Dropdown, Button } from 'semantic-ui-react';

import './Search.css';

const Search = ({siteChange, functionChange}) => {
  const [site, setSite] = useState('');
  const [functions, setFunctions] = useState('');

  const functionOptions = [
    { key: 'view', value: 'view', text: 'View' },
    { key: 'refresh', value: 'refresh', text: 'Refresh' },
  ]

  const onSubmit = (e) => {
    e.preventDefault();
    if (!site) {
      alert('Please Add A Site');
      return;
    }
    if (!functions) {
      alert('Please Select A Function');
      return;
    }
    siteChange("http://" + site);
    functionChange(functions);
    setSite('');
    setFunctions('');
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Field>
          <Input
            label='http://'
            placeholder='example.com'
            value={site}
            fluid
            onChange={(e) => setSite(e.target.value)}
          />
        </Form.Field>
        <Form.Field>
          <Dropdown
            onChange={(e, data) =>  setFunctions(data.value)}
            placeholder='Select Function'
            search
            selection
            fluid
            options={functionOptions}
          />
        </Form.Field>
        <Button type='submit' onClick={onSubmit}>Submit</Button>
      </Form>
    </>
  );
}

export default Search;