import { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';

import Navbar from '../src/pages/Navbar/Navbar';
const Home = lazy(() => import('./pages/Home/Home'));
const Single = lazy(() => import('./pages/Single/Single'));
const User = lazy(() => import('./pages/User/User'));

const App = () => {
  return (
    <Router>
      <Navbar />
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Single" component={Single} />
          <Route path="/User" component={User} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;