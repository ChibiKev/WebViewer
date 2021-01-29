import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Navbar from '../src/pages/Navbar/Navbar';
const Home = lazy(() => import('./pages/Home/Home'));
const Viewer = lazy(() => import('./pages/Viewer/Viewer'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Viewer" component={Viewer} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;