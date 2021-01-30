import { useState } from 'react';
import { Input } from 'semantic-ui-react';

import './Search.css';

const Search = ({siteChange}) => {
  const [site, setSite] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!site) {
      alert('Please Add A Site');
      return;
    }
    siteChange("http://" + site);
    setSite('');
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <Input
          icon={{ name: 'search', circular: true, link: true }}
          label='http://'
          placeholder='example.com'
          value={site}
          onChange={(e) => setSite(e.target.value)}
          fluid
        />
      </form>
    </>
  );
}

export default Search;