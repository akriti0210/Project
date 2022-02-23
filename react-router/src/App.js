import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Post from './components/Post';
import { useState } from 'react';

function App() {

  const [login, setLogin] = useState(false)
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <button onClick={() => setLogin(!login)}>{login ? "Logged In" : "Log In"}</button>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          {/* <Route path='/profile'>
            {login ? <Profile /> : <Redirect to="/" />}
          </Route> */}
          <Route path='/profile'>
            <Route path='/profile' element={<Profile login={login} />}></Route>
          </Route>
          <Route path='*' element={<NotFound />} />
          <Route path='/post/:id' element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
