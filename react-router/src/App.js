import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
// import About from './components/About';
import Profile from './components/Profile';
import NotFound from './components/NotFound';
import Post from './components/Post';
import { useState } from 'react';
import OrderSummary from './components/OrderSummary';
import { Products } from './components/Products';
import { FeaturedProducts } from './components/FeaturedProducts';
import { NewProducts } from './components/NewProducts';
import { Users } from './components/Users';
import { UserDetails } from './components/UserDetails';
import { Admin } from './components/Admin';
import React from 'react';
const LazyAbout = React.lazy(()=>import ('./components/About'))

// function App() {

//   const [login, setLogin] = useState(false)
//   return (
//     <BrowserRouter>
//       <div className="App">
//         <Header />
//         <button onClick={() => setLogin(!login)}>{login ? "Logged In" : "Log In"}</button>
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           {/* <Route path='/profile'>
//             {login ? <Profile /> : <Redirect to="/" />}
//           </Route> */}
//           <Route path='/profile'>
//             <Route path='/profile' element={<Profile login={login} />}></Route>
//           </Route>
//           <Route path='*' element={<NotFound />} />
//           <Route path='/post/:id' element={<Post />} />
//         </Routes>
//       </div>
//     </BrowserRouter>

//   );
// }

function App(){
  return (
    <>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='about' element={
          <React.Suspense fallback='Loading......'>
            <LazyAbout/>
          </React.Suspense>
        }/>
        {/* navigating programmatically */}
        <Route path='order-summary' element={<OrderSummary/>}/>
        {/* no match route */}
        <Route path='*' element={<NotFound/>}/>
        <Route path='products' element={<Products/>}>
          {/* index route */}
          <Route index element={<FeaturedProducts/>}/>
          {/* nested route */}
          <Route path='featured' element={<FeaturedProducts/>}/>
          <Route path='new' element={<NewProducts/>}/>
        </Route>
        {/* <Route path='user' element={<Users/>}/>
        <Route path='user/:userId' element={<UserDetails/>}/>
        <Route path='user/admin' element={<Admin/>}/> */}
        <Route path='user' element={<Users/>}>
          <Route path=':userId' element={<UserDetails/>}/>
          <Route path='admin' element={<Admin/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App;
