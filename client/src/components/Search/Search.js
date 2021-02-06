import { useState } from 'react';
import { Form, Input, Dropdown, Button } from 'semantic-ui-react';

import './Search.css';

const Search = ({siteChange, functionChange, timerChange, textChange}) => {
  const [site, setSite] = useState('');
  const [functions, setFunctions] = useState('');
  const [timer, setTimer] = useState('');
  const [text, setText] = useState('');

  const functionOptions = [
    { key: 'view', value: 'view', text: 'View' },
    { key: 'refresh', value: 'refresh', text: 'Refresh' },
    { key: 'find', value: 'find', text: 'Find' },
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
    if (functions === 'refresh' && !timer) {
      alert('Please Select A Valid Timer');
      return;
    }
    if (functions === 'find' && !text) {
      alert('Please Select A Valid Text To Find');
      return;
    }
    siteChange("http://" + site);
    functionChange(functions);
    timerChange(timer);
    textChange(text);
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
        {functions === 'refresh' && 
          <Form.Field>
            <Input
              placeholder='Amount in Seconds'
              value={timer}
              type="number"
              min="1"
              step="1"
              fluid
              labelPosition='right'
              label='Seconds'
              onChange={(e) => setTimer(e.target.value)}
            />
          </Form.Field>
        }
        {functions === 'find' && 
          <Form.Field>
            <Input
              placeholder='Find This Text'
              value={text}
              type="text"
              fluid
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Field>
        }
        <Button type='submit' onClick={onSubmit}>Submit</Button>
      </Form>
    </>
  );
}

export default Search;