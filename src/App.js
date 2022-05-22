import { Fragment } from 'react';
import './App.css';
import Home from './pages/home/Home';
import TopBar from './components/TopBar/TopBar';
import Single from './pages/home/single/Single';
import Write from './pages/write/Write';

function App() {
  return (
    <Fragment>
      <TopBar/>
      <Write/>
    </Fragment>
  );
}

export default App;
