import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

// import pages
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Contact from './Pages/Contact';
import iphone from './Projects/iphone';

function App() {
  return (
    <Router>
      <Navbar />
      <div id='pageContent' className='w-[80%] m-auto'>
          <Routes>
            <Route exact path="/" Component={Portfolio} />
            <Route exact path="/about" Component={About} />
            <Route exact path="/contact" Component={Contact} />
            <Route exact path="/iphoneclone" Component={iphone} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
