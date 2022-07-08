import Home from './pages/home';
import Store from './pages/store';
import Contact from './pages/contact';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Nav from './Partials/Nav';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Demo from './pages/demo';
import './App.css';
import Footer from './Partials/Footer';

function App() {
  return (
    <Router>
      <div>
      <Nav />
      <Routes>
        <Route exact path="/pactech" element={<Home />} />
        <Route exact path="/pactech/about" element={<About />} />
        <Route exact path="/pactech/contact" element={<Contact />} />
        <Route exact path="/pactech/portfolio" element={<Portfolio />} />
        <Route exact path="/pactech/store" element={<Store />} />
      </Routes>
    </div>
      <Footer /> 

    </Router>
    
  );
}

export default App;
