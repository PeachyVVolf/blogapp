import { Fragment } from 'react';
import './App.css';
import Home from './pages/home/Home';
import TopBar from './components/TopBar/TopBar';
import Single from './pages/home/single/Single';

function App() {
  return (
    <Fragment>
      <TopBar/>
      <Single/>
    </Fragment>
  );
}

export default App;
