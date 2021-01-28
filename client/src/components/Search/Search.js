import { useState } from 'react';
import './Search.css';

const Search = ({siteChange}) => {
  const [site, setSite] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!site) {
      alert('Please Add A Site');
      return;
    }
    siteChange(site);
    setSite('');
  }

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Add Site</label>
          <input
            type='text'
            placeholder='Add Site'
            value={site}
            onChange={(e) => setSite(e.target.value)}
          />
        </div>
        <input type='submit' value='Set Site' className='btn btn-block' />
      </form>
    </>
  );
}

export default Search;