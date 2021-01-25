import { Suspense, lazy, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

const Home = lazy(() => import('./components/Home/Home'));

const App = () => {
  const [site, setSite] = useState([])

  const addSite = (site) => {
    setSite(site);
  }

  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" render={() => <Home onAdd={addSite}/> } />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;