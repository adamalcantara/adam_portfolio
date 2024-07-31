import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Nav from './components/Nav';

// import pages
import Home from './Pages/Home';
import iphone from './Projects/iphone';
import FinishChecker from './Projects/FinishChecker';
import BookTracker from './Projects/BookTracker';
import TheGuitarologist from './Projects/TheGuitarologist';
import TheGrunyons from './Projects/TheGrunyons';
import ThreeTwentyFive from './Projects/ThreeTwentyFive';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Nav />
      <div id='pageContent' className='w-[100%] m-auto mt-[35px]'>
          <Routes>
            <Route exact path="/" Component={Home} />
            <Route exact path="/iphoneclone" Component={iphone} />
            <Route exact path="/finishchecker" Component={FinishChecker} />
            <Route exact path="/booktracker" Component={BookTracker} />
            <Route exact path="/theguitarologist" Component={TheGuitarologist} />
            <Route exact path="/grunyons" Component={TheGrunyons} />
            <Route exact path="/325" Component={ThreeTwentyFive} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
