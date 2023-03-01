//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Apropos from './components/Apropos.jsx';
import Blog from './components/Blog.jsx';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/blog" exact element={<Blog />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
