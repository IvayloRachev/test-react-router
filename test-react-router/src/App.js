//import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Apropos from './components/Apropos.jsx';
import Blog from './components/Blog.jsx';

function App() {
  return (
    <div className="container">
      <Nav />
      <Home />
      <Apropos />
      <Blog />
    </div>
  );
}

export default App;
