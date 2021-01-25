import { useState } from 'react';
import './Home.css';

const Home = ({onAdd}) => {
  const [text, setText] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    if (!text) {
      alert('Please Add A Site');
      return;
    }
    onAdd({ text });
    setText('');
  }

  return (
    <>
      Home Page
      <form onSubmit={onSubmit}>
        <div className='form-control'>
          <label>Add Site</label>
          <input
            type='text'
            placeholder='Add Site'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>

        <input type='submit' value='Set Site' className='btn btn-block' />
      </form>
    </>
  );
}

export default Home;