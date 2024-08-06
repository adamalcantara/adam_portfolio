import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Nav from './components/Nav';

// import pages
import Home from './Pages/Home';

function App() {
  return (
    <Router>
      {/* <Navbar /> */}
      <Nav />
      <div id='pageContent' className='w-[100%] m-auto mt-[35px]'>
          <Routes>
            <Route exact path="/" Component={Home} />
          </Routes>
      </div>
    </Router>
  );
}

export default App;
