//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Apropos from './components/Apropos.jsx';
import Blog from './components/Blog.jsx';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {
  return (
    <div className="container">
      <Router>
        <Home />
        <Nav />
        <Apropos />
        <Blog />
      </Router>
    </div>
  );
}

export default App;
