import { useState } from 'react';
import { Form, Input, Dropdown, Message, Button } from 'semantic-ui-react';

import './Search.css';

const Search = ({siteChange, viewChange, functionChange, deviceChange, timerChange, textChange, textCasesChange}) => {
  const [site, setSite] = useState('');
  const [view, setView] = useState('');
  const [device, setDevice] = useState('');
  const [functions, setFunctions] = useState('');
  const [timer, setTimer] = useState('');
  const [text, setText] = useState('');
  const [textCases, setTextCases] = useState('');

  const [formError, setFormError] = useState(false);
  const [siteError, setSiteError] = useState(false);
  const [deviceError, setDeviceError] = useState(false);
  const [functionError, setFunctionError] = useState(false);
  const [timerError, setTimerError] = useState(false);
  const [textError, setTextError] = useState(false);

  const deviceOptions = [
    { key: 'Blackberry PlayBook', value: 'Blackberry PlayBook', text: 'Blackberry PlayBook (600 x 1024)' },
    { key: 'Blackberry PlayBook landscape', value: 'Blackberry PlayBook landscape', text: 'Blackberry PlayBook landscape (1024 x 600)' },
    { key: 'BlackBerry Z30', value: 'BlackBerry Z30', text: 'BlackBerry Z30 (360 x 640)' },
    { key: 'BlackBerry Z30 landscape', value: 'BlackBerry Z30 landscape', text: 'BlackBerry Z30 landscape (640 x 360)' },
    { key: 'Galaxy Note 3', value: 'Galaxy Note 3', text: 'Galaxy Note 3 (360 x 640)' },
    { key: 'Galaxy Note 3 landscape', value: 'Galaxy Note 3 landscape', text: 'Galaxy Note 3 landscape (640 x 360)' },
    { key: 'Galaxy Note II', value: 'Galaxy Note II', text: 'Galaxy Note II (360 x 640)' },
    { key: 'Galaxy Note II landscape', value: 'Galaxy Note II landscape', text: 'Galaxy Note II landscape (640 x 360)' },
    { key: 'Galaxy S III', value: 'Galaxy S III', text: 'Galaxy S III (360 x 640)' },
    { key: 'Galaxy S III landscape', value: 'Galaxy S III landscape', text: 'Galaxy S III landscape (640 x 360)' },
    { key: 'Galaxy S5', value: 'Galaxy S5', text: 'Galaxy S5 (360 x 640)' },
    { key: 'Galaxy S5 landscape', value: 'Galaxy S5 landscape', text: 'Galaxy S5 landscape (640 x 360)' },
    { key: 'iPad', value: 'iPad', text: 'iPad (768 x 1024)' },
    { key: 'iPad landscape', value: 'iPad landscape', text: 'iPad landscape (1024 x 768)' },
    { key: 'iPad Mini', value: 'iPad Mini', text: 'iPad Mini (768 x 1024)' },
    { key: 'iPad Mini landscape', value: 'iPad Mini landscape', text: 'iPad Mini landscape (1024 x 768)' },
    { key: 'iPad Pro', value: 'iPad Pro', text: 'iPad Pro (1024 x 1366)' },
    { key: 'iPad Pro landscape', value: 'iPad Pro landscape', text: 'iPad Pro landscape (1366 x 1024)' },
    { key: 'iPhone 4', value: 'iPhone 4', text: 'iPhone 4 (320 x 480)' },
    { key: 'iPhone 4 landscape', value: 'iPhone 4 landscape', text: 'iPhone 4 landscape (480 x 320)' },
    { key: 'iPhone 5', value: 'iPhone 5', text: 'iPhone 5 (320 x 568)' },
    { key: 'iPhone 5 landscape', value: 'iPhone 5 landscape', text: 'iPhone 5 landscape (568 x 320)' },
    { key: 'iPhone 6', value: 'iPhone 6', text: 'iPhone 6 (375 x 667)' },
    { key: 'iPhone 6 landscape', value: 'iPhone 6 landscape', text: 'iPhone 6 landscape (667 x 375)' },
    { key: 'iPhone 6 Plus', value: 'iPhone 6 Plus', text: 'iPhone 6 Plus (414 x 736)' },
    { key: 'iPhone 6 Plus landscape', value: 'iPhone 6 Plus landscape', text: 'iPhone 6 Plus landscape (736 x 414)' },
    { key: 'iPhone 7', value: 'iPhone 7', text: 'iPhone 7 (375 x 667)' },
    { key: 'iPhone 7 landscape', value: 'iPhone 7 landscape', text: 'iPhone 7 landscape (667 x 375)' },
    { key: 'iPhone 7 Plus', value: 'iPhone 7 Plus', text: 'iPhone 7 Plus (414 x 736)' },
    { key: 'iPhone 7 Plus landscape', value: 'iPhone 7 Plus landscape', text: 'iPhone 7 Plus landscape (736 x 414)' },
    { key: 'iPhone 8', value: 'iPhone 8', text: 'iPhone 8 (375 x 667)' },
    { key: 'iPhone 8 landscape', value: 'iPhone 8 landscape', text: 'iPhone 8 landscape (667 x 375)' },
    { key: 'iPhone 8 Plus', value: 'iPhone 8 Plus', text: 'iPhone 8 Plus (414 x 736)' },
    { key: 'iPhone 8 Plus landscape', value: 'iPhone 8 Plus landscape', text: 'iPhone 8 Plus landscape (736 x 414)' },
    { key: 'iPhone SE', value: 'iPhone SE', text: 'iPhone SE (320 x 568)' },
    { key: 'iPhone SE landscape', value: 'iPhone SE landscape', text: 'iPhone SE landscape (568 x 320)' },
    { key: 'iPhone X', value: 'iPhone X', text: 'iPhone X (375 x 812)' },
    { key: 'iPhone X landscape', value: 'iPhone X landscape', text: 'iPhone X landscape (812 x 375)' },
    { key: 'iPhone XR', value: 'iPhone XR', text: 'iPhone XR (414 x 896)' },
    { key: 'iPhone XR landscape', value: 'iPhone XR landscape', text: 'iPhone XR landscape (896 x 414)' },
    { key: 'iPhone 11', value: 'iPhone 11', text: 'iPhone 11 (414 x 828)' },
    { key: 'iPhone 11 landscape', value: 'iPhone 11 landscape', text: 'iPhone 11 landscape (828 x 414)' },
    { key: 'iPhone 11 Pro', value: 'iPhone 11 Pro', text: 'iPhone 11 Pro (375 x 812)' },
    { key: 'iPhone 11 Pro landscape', value: 'iPhone 11 Pro landscape', text: 'iPhone 11 Pro landscape (812 x 375)' },
    { key: 'iPhone 11 Pro Max', value: 'iPhone 11 Pro Max', text: 'iPhone 11 Pro Max (414 x 896)' },
    { key: 'iPhone 11 Pro Max landscape', value: 'iPhone 11 Pro Max landscape', text: 'iPhone 11 Pro Max landscape (896 x 414)' },
    { key: 'JioPhone 2', value: 'JioPhone 2', text: 'JioPhone 2 (240 x 320)' },
    { key: 'JioPhone 2 landscape', value: 'JioPhone 2 landscape', text: 'JioPhone 2 landscape (320 x 240)' },
    { key: 'Kindle Fire HDX', value: 'Kindle Fire HDX', text: 'Kindle Fire HDX (800 x 1280)' },
    { key: 'Kindle Fire HDX landscape', value: 'Kindle Fire HDX landscape', text: 'Kindle Fire HDX landscape (1280 x 800)' },
    { key: 'LG Optimus L70', value: 'LG Optimus L70', text: 'LG Optimus L70 (384 x 640)' },
    { key: 'LG Optimus L70 landscape', value: 'LG Optimus L70 landscape', text: 'LG Optimus L70 landscape (640 x 384)' },
    { key: 'Microsoft Lumia 550', value: 'Microsoft Lumia 550', text: 'Microsoft Lumia 550 (640 x 360)' },
    { key: 'Microsoft Lumia 950', value: 'Microsoft Lumia 950', text: 'Microsoft Lumia 950 (360 x 640)' },
    { key: 'Microsoft Lumia 950 landscape', value: 'Microsoft Lumia 950 landscape', text: 'Microsoft Lumia 950 landscape (640 x 360)' },
    { key: 'Nexus 10', value: 'Nexus 10', text: 'Nexus 10 (800 x 1280)' },
    { key: 'Nexus 10 landscape', value: 'Nexus 10 landscape', text: 'Nexus 10 landscape (1280 x 800)' },
    { key: 'Nexus 4', value: 'Nexus 4', text: 'Nexus 4 (384 x 640)' },
    { key: 'Nexus 4 landscape', value: 'Nexus 4 landscape', text: 'Nexus 4 landscape (640 x 384)' },
    { key: 'Nexus 5', value: 'Nexus 5', text: 'Nexus 5 (360 x 640)' },
    { key: 'Nexus 5 landscape', value: 'Nexus 5 landscape', text: 'Nexus 5 landscape (640 x 360)' },
    { key: 'Nexus 5X', value: 'Nexus 5X', text: 'Nexus 5X (412 x 732)' },
    { key: 'Nexus 5X landscape', value: 'Nexus 5X landscape', text: 'Nexus 5X landscape (732 x 412)' },
    { key: 'Nexus 6', value: 'Nexus 6', text: 'Nexus 6 (412 x 732)' },
    { key: 'Nexus 6 landscape', value: 'Nexus 6 landscape', text: 'Nexus 6 landscape (732 x 412)' },
    { key: 'Nexus 6P', value: 'Nexus 6P', text: 'Nexus 6P (412 x 732)' },
    { key: 'Nexus 6P landscape', value: 'Nexus 6P landscape', text: 'Nexus 6P landscape (732 x 412)' },
    { key: 'Nexus 7', value: 'Nexus 7', text: 'Nexus 7 (600 x 960)' },
    { key: 'Nexus 7 landscape', value: 'Nexus 7 landscape', text: 'Nexus 7 landscape (960 x 600)' },
    { key: 'Nokia Lumia 520', value: 'Nokia Lumia 520', text: 'Nokia Lumia 520 (320 x 533)' },
    { key: 'Nokia Lumia 520 landscape', value: 'Nokia Lumia 520 landscape', text: 'Nokia Lumia 520 landscape (533 x 320)' },
    { key: 'Nokia N9', value: 'Nokia N9', text: 'Nokia N9 (480 x 854)' },
    { key: 'Nokia N9 landscape', value: 'Nokia N9 landscape', text: 'Nokia N9 landscape (854 x 480)' },
    { key: 'Pixel 2', value: 'Pixel 2', text: 'Pixel 2 (411 x 731)' },
    { key: 'Pixel 2 landscape', value: 'Pixel 2 landscape', text: 'Pixel 2 landscape (731 x 411)' },
    { key: 'Pixel 2 XL', value: 'Pixel 2 XL', text: 'Pixel 2 XL (411 x 823)' },
    { key: 'Pixel 2 XL landscape', value: 'Pixel 2 XL landscape', text: 'Pixel 2 XL landscape (823 x 411)' },
  ]

  const functionOptions = [
    { key: 'view', value: 'view', text: 'View' },
    { key: 'refresh', value: 'refresh', text: 'Refresh' },
    { key: 'find', value: 'find', text: 'Find' },
    { key: 'refreshfind', value: 'refreshfind', text: 'Refresh + Find' },
  ]

  const viewOptions = [
    { key: 'image', value: 'image', text: 'Image' },
    { key: 'PDF', value: 'PDF', text: 'PDF' },
    { key: 'HTML', value: 'HTML', text: 'HTML' },
  ]

  const textOptions = [
    { key: 'g', value: 'g', text: 'Case Sensitive' },
    { key: 'gi', value: 'gi', text: 'Case Insensitive' },
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
    if (!device) {
      setDeviceError(true);
      Error = true;
    }
    else{
      setDeviceError(false);
    }
    if (!functions) {
      setFunctionError(true);
      Error = true;
    }
    else{
      setFunctionError(false);
    }
    if ((functions === 'refresh' || functions === 'refreshfind') && !timer) {
      setTimerError(true);
      Error = true;
    }
    else{
      setTimerError(false);
    }
    if ((functions === 'find' || functions === 'refreshfind') && (!text || !textCases)) {
      setTextError(true);
      Error = true;
    }
    else{
      setTextError(false);
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
    deviceChange(device);
    functionChange(functions);
    timerChange(timer);
    textChange(text);
    textCasesChange(textCases);
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
        <Form.Field required error={deviceError}>
          <label>View Device</label>
          <Dropdown
            onChange={(e, data) =>  setDevice(data.value)}
            placeholder='Select Device'
            search
            selection
            fluid
            options={deviceOptions}
          />
        </Form.Field>
        <Form.Field required error={functionError}>
          <label>Function</label>
          <Dropdown
            onChange={(e, data) =>  setFunctions(data.value)}
            placeholder='Select Function'
            search
            selection
            fluid
            options={functionOptions}
          />
        </Form.Field>
        {(functions === 'refresh' || functions === 'refreshfind') &&
          <Form.Field required error={timerError}>
            <label>Refresh Time</label>
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
        {(functions === 'find' || functions === 'refreshfind') && 
          <Form.Field required error={textError}>
            <label>Find Text</label>
            <Input
              placeholder='Find This Text'
              value={text}
              type="text"
              fluid
              onChange={(e) => setText(e.target.value)}
              action={
                <Dropdown
                  onChange={(e, data) =>  setTextCases(data.value)}
                  placeholder='Settings'
                  search
                  selection
                  options={textOptions}
                />
              }
            />
          </Form.Field>
        }
        <Button type='submit' onClick={onSubmit}>Submit</Button>
      </Form>
    </>
  );
}

export default Search;