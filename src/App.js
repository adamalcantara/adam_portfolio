import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';

// import pages
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Contact from './Pages/Contact';

function App() {
  return (
    <Router>
      <Navbar />
      <div id='pageContent'>
        <Routes>
          <Route exact path="/" Component={Portfolio} />
          <Route exact path="/about" Component={About} />
          <Route exact path="/contact" Component={Contact} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
