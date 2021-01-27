import { Suspense, lazy, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/Home/Home'));

const App = () => {
  const [site, setSite] = useState('')
  const [image, setImage] = useState('')

  const addSite = (site) => {
    setSite(site);
    fetch(`/screenshot?url=${site}`)
      .then(response => {
        console.log(response)
        setImage(response.url)
      })
      .catch(error => {console.log(error)})
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" render={() => <Home onAdd={addSite}/> } />
        </Switch>
      </Suspense>
      <img src={image} alt="Website" />
    </Router>
  );
}

export default App;