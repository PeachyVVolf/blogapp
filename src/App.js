import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './pages/home/Home';
import TopBar from './components/TopBar/TopBar';
import Single from './pages/home/single/Single';
import Write from './pages/write/Write';
import Settings from './pages/settings/Settings';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Posts from './components/posts/Posts';

function App() {
  const user = false;
    return (
      <div className='app'>
        <BrowserRouter>
          <TopBar/>
          <Routes>
            <Route exact path="/" element={<Home/>} />
            <Route exact path="/login" element={user?<Home/>:<Login/>} />
            <Route exact path="/register" element={user?<Home/>:<Register/>} />
            <Route exact path="/settings" element={user?<Settings/>:<Login/>} />
            <Route exact path="/post/:postId" element={<Single/>} />
            <Route exact path="/posts" element={<Posts/>} />
            <Route exact path="/write" element={user?<Write/>:<Login/>} />
          </Routes>
        </BrowserRouter>
      </div>
    );
}

export default App;
