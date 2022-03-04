import React from 'react';
import './App.css';
import { BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Login from './components/login/Login';
import Nav from './components/nav/Nav';
import Home from './components/home/Home';

function App() {
  return (
    <Router>
        <Routes>
           <Route path='/' element = {<Login/>} />
           <Route path='/home' element = {
                  <>
                  <Nav/>
                  <Home/>
                  </>
          } />
        </Routes>
    </Router>
  );
}

export default App;
