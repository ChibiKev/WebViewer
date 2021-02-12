import { useState } from 'react';
import { Form, Input, Dropdown, Button } from 'semantic-ui-react';

import './Search.css';

const Search = ({siteChange, viewChange, functionChange, timerChange, textChange}) => {
  const [site, setSite] = useState('');
  const [functions, setFunctions] = useState('');
  const [view, setView] = useState('');
  const [timer, setTimer] = useState('');
  const [text, setText] = useState('');

  const functionOptions = [
    { key: 'view', value: 'view', text: 'View' },
    { key: 'refresh', value: 'refresh', text: 'Refresh' },
    { key: 'find', value: 'find', text: 'Find' },
    { key: 'refreshfind', value: 'refreshfind', text: 'Refresh + Find' },
  ]

  const viewOptions = [
    { key: 'image', value: 'image', text: 'Image' },
    { key: 'PDF', value: 'PDF', text: 'PDF' },
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
    if (!view) {
      alert('Please Select A File To View The Site');
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
    if (functions === 'refreshfind' && !timer && !text) {
      alert('Please Select A Valid Timer And A Valid Text To Find');
      return;
    }
    var updatedSite = site;
    if (!/^https?:\/\//i.test(site)) {
      updatedSite = 'http://' + site;
    }
    siteChange(updatedSite);
    viewChange(view);
    functionChange(functions);
    timerChange(timer);
    textChange(text);
  }

  return (
    <>
      <Form onSubmit={onSubmit}>
        <Form.Field>
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
        {functions === 'refreshfind' && 
          <>
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
            <Form.Field>
              <Input
                placeholder='Find This Text'
                value={text}
                type="text"
                fluid
                onChange={(e) => setText(e.target.value)}
              />
            </Form.Field>
          </>
        }
        <Button type='submit' onClick={onSubmit}>Submit</Button>
      </Form>
    </>
  );
}

export default Search;