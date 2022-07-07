import Home from './pages/home';
import Store from './pages/store';
import Contact from './pages/contact';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Nav from './Partials/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Demo from './pages/demo';
import './App.css';

function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/portfolio" element={<Portfolio />} />
        <Route exact path="/store" element={<Store />} />
        </Routes>
      
    </div>
    </Router>
   
    
  );
}

export default App;
