import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';

// import pages
import Portfolio from './Pages/Portfolio';
import About from './Pages/About';
import Contact from './Pages/Contact';
import iphone from './Projects/iphone';
import FinishChecker from './Projects/FinishChecker';
import BookTracker from './Projects/BookTracker';
import TheGuitarologist from './Projects/TheGuitarologist';
import TheGrunyons from './Projects/TheGrunyons';

function App() {
  return (
    <Router>
      <Navbar />
      <div id='pageContent' className='w-[80%] m-auto mt-5'>
          <Routes>
            <Route exact path="/" Component={Portfolio} />
            <Route exact path="/about" Component={About} />
            <Route exact path="/contact" Component={Contact} />
            <Route exact path="/iphoneclone" Component={iphone} />
            <Route exact path="/finishchecker" Component={FinishChecker} />
            <Route exact path="/booktracker" Component={BookTracker} />
            <Route exact path="/theguitarologist" Component={TheGuitarologist} />
            <Route exact path="/grunyons" Component={TheGrunyons} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
